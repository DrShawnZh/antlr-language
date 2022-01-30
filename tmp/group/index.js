import GroupLexer from "./GroupLexer.js";
import GroupParser from "./GroupParser.js";
import GroupVisitor from "./GroupVisitor.js";
import { CommonTokenStream, InputStream } from "antlr4";

/**
 *
 * @param {string} str
 */
function toAst(str, col) {
  const stream = new InputStream(str);
  const lexer = new GroupLexer(stream);
  const token = new CommonTokenStream(lexer);
  const parser = new GroupParser(token, col);
  // parser.setBuildParseTree(false); // 不需要浪费时间构建语法分析树
  const tree = parser.file();
  console.log(tree);
}

toAst(
  `a 1 3
b 2 2
c 3 1
`,
  3
);
