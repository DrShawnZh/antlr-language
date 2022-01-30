import Lexer from "./ArrayInitLexer.js";
import Parser from "./ArrayInitParser.js";
import { InputStream, CommonTokenStream } from "antlr4";
import { ParseTreeWalker } from "antlr4/tree/Tree";

/**
 *
 * @param {string} str
 */
const printAst = (str) => {
  const stream = new InputStream(str);

  const lexer = new Lexer(stream);

  const token = new CommonTokenStream(lexer);

  const parser = new Parser(token);

  const tree = parser.init();

  console.log(tree);
};

printAst("{1, 2, 3}");
