import Lexer from "./CvsLexer.js";
import Parser from "./CvsParser.js";
import Visitor from "./CvsVisitor.js";
import { InputStream, CommonTokenStream } from "antlr4";

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

  // const visitor = new EvalVisitor();

  // const ans = visitor.visit(tree);

  // console.log(ans);
  console.log(tree);
};

printAst(`class,Dee,member
a,b,c
d,e,f
`);