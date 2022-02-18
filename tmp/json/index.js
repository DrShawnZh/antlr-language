import Lexer from "./JSONLexer.js";
import Parser from "./JsonParser.js";
import Visitor from "./JsonVisitor.js";
import Listener from "./JsonListener.js";
import { InputStream, CommonTokenStream } from "antlr4";
import antlr4 from "antlr4";

// const Lexer = require("./JSONLexer.js");
// const Parser = require("./JsonParser.js");
// const Visitor = require("./JsonVisitor.js");
// const Listener = require("./JsonListener.js");
// const { InputStream, CommonTokenStream } = require("antlr4");

// const { ParseTreeWalker } = require("antlr4/src/antlr4/tree/Tree");

const printAst = (str) => {
  const stream = new InputStream(str);

  const lexer = new Lexer(stream);

  const token = new CommonTokenStream(lexer);

  const parser = new Parser(token);

  parser.buildParseTrees = true;

  const tree = parser.json();

  const visitor = new EvalVisitor();

  const ans = visitor.visit(tree);

  console.log(ans);
  console.log(tree);
};

const json2XML = (str) => {
  const stream = new InputStream(str);

  const lexer = new Lexer(stream);

  const token = new CommonTokenStream(lexer);

  const parser = new Parser(token);

  parser.buildParseTrees = true;

  const tree = parser.json();

  const listener = new XMLListener();

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
};

const json = {
  foo: {
    aa: "bb",
    cc: {
      dd: "ee",
    },
  },
  num: 1,
  arr: [1, 2, 3],
  obj: {
    baz: "faa",
  },
  boo: true,
};

class XMLListener extends Listener {
  XML = new Map();

  constructor() {
    super();
  }

  getText(ctx) {
    return ctx.getText();
  }

  exitAtom(ctx) {
    console.log(ctx.getText(), "atom");
    this.XML.set(ctx, ctx.getText());
  }

  exitString(ctx) {
    console.log(ctx.getText(), "string");
    this.XML.set(ctx, delQuote(ctx.getText()));
  }

  exitObj(ctx) {
    console.log(ctx, "exit obj");
    this.XML.set(ctx, this.XML.get(ctx.object()));
  }

  exitArr(ctx) {}

  exitPair(ctx) {
    console.log(ctx);
    console.log(ctx.STRING().getText());
    const tag = delQuote(ctx.STRING().getText());
    const vCtx = ctx.value();
    const s = `<${tag}>${this.XML.get(vCtx)}</${tag}>\n`;
    this.XML.set(ctx, s);
  }

  exitAnArray(ctx) {
    let s = "";
    for (let vCtx of ctx.value()) {
      s += "<element>";
      s += this.XML.get(vCtx);
      s += "</element>";
      s += "\n";
    }
    this.XML.set(ctx, s);
  }

  exitEmptyArray(ctx) {
    this.XML.set(ctx, "");
  }

  exitAnObj(ctx) {
    let s = "";
    s += "\n";
    for (let vCtx of ctx.pair()) {
      s += this.XML.get(vCtx);
    }
    this.XML.set(ctx, s);
  }

  exitEmptyObj(ctx) {
    this.XML.set(ctx, "");
  }

  exitJson(ctx) {
    const ans = this.XML.get(ctx.getChild(0))
    console.log(ans);
    this.XML.set(ctx, this.XML.get(ctx.getChild(0)));
    console.log(this.XML);
  }
}

console.log(JSON.stringify(json));

const delQuote = (s = "") => {
  return s.slice(1, s.length - 1);
};

json2XML(JSON.stringify(json));

class EvalVisitor extends Visitor {
  constructor() {
    super();
  }

  visitArray(ctx) {
    console.log(ctx);
    return {
      type: "array",
    };
  }

  visitObj(ctx) {
    console.log(ctx, "ctx");
    const obj = ctx.object();
    const value = this.visit(obj);
    return {
      type: "obj",
      value,
    };
  }

  visitPair(ctx) {
    console.log(ctx, "pair ctx");
    const key = ctx.STRING().getText();
    const value = this.visit(ctx.value());
    return {
      type: "pair",
      key,
      value,
    };
  }

  visitValue(ctx) {
    console.log(ctx, "value ctx");
    const value = ctx.STRING().getText();
    return {
      type: "value",
      value,
    };
  }
}

const obj = {
  foo: "bar",
  nums: [1, 2, 3],
};

// printAst(JSON.stringify(obj));
