import Lexer from "./LabelExprLexer.js";
import Parser from "./LabelExprParser.js";
import { InputStream, CommonTokenStream } from "antlr4";
// import { ParseTreeWalker } from "antlr4/tree/Tree";
import LabelExprVisitor from "./LabelExprVisitor.js";

/**
 *
 * @param {string} str
 */
const printAst = (str) => {
  const stream = new InputStream(str);

  const lexer = new Lexer(stream);

  const token = new CommonTokenStream(lexer);

  const parser = new Parser(token);

  parser.buildParseTrees = true;

  const tree = parser.prog();

  const visitor = new EvalVisitor();

  const ans = visitor.visit(tree);

  console.log(ans);
  console.log(tree);
};

class EvalVisitor extends LabelExprVisitor {
  constructor(params) {
    super();
  }

  visitAssign(ctx) {
    const id = ctx.ID().getText();
    const value = this.visit(ctx.expr());
    return [{ t: "id", val: id }, value];
  }

  visitExpr(ctx) {
    console.log(ctx, "expr ctx");
    const id = ctx.ID();
    const val = ctx.children[0].getText();
    return {
      t: "expr",
      val,
    };
  }

  visitInt(ctx) {
    console.log(ctx, "caaaaaa");
    const val = ctx.INT().getText();
    return { t: "int", val };
  }

  visitId(ctx) {
    console.log("enter id");
    const val = ctx.ID().getText();
    return {
      t: "id",
      val,
    };
  }
}

printAst(`a = 1`);
