import Lexer from "./IPLexer.js";
import Parser from "./IPParser.js";
import { InputStream, CommonTokenStream } from "antlr4";
// import { ParseTreeWalker } from "antlr4/tree/Tree";
import LabelExprVisitor from "./IPVisitor.js";

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

  const tree = parser.file();

  const visitor = new EvalVisitor();

  const ans = visitor.visit(tree);

  console.log(ans);
  console.log(tree);
};

class EvalVisitor extends LabelExprVisitor {
  constructor(params) {
    super();
  }

  visitIp(ctx) {
    console.log(ctx);
    const ints = ctx.INT()
    const val = ints.map(it => it.getText()).join('.')

    return {
      type: "ip",
      value: val,
    };
  }
}

printAst(`172.0.0.1 "GET /download/index.html" 200`);
