import Lexer from "./JSONLexer.js";
import Parser from "./JsonParser.js";
import Visitor from "./JsonVisitor.js";
import { InputStream, CommonTokenStream } from "antlr4";

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
};

printAst(JSON.stringify(obj));
