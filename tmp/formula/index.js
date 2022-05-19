import * as antlr4 from "antlr4";
import FormulaTSLexer from "./FormulaLexer.js";
import FormulaTSParser from "./FormulaParser.js";
import FormulaTSListener from "./FormulaListener.js";
import { ParseTree, ParseTreeWalker, TerminalNodeImpl } from "antlr4/tree/Tree";
import { ParserRuleContext } from "antlr4";
import { toJSON } from "./util";
import { FormulaTSVisitor } from "./FormulaVisitor.js";
import { Recognizer } from "antlr4/Recognizer";
import { Token } from "antlr4/Token";

let astGen = new FormulaTSVisitor();

export async function toAst(formulaStr) {
  return astGen.toAst(formulaStr);
}

export function walk(tree, listener) {
  let walker = new ParseTreeWalker();
  walker.walk(listener, tree);
}

/**
 * 解析公式字符串
 * @param formulaStr
 */
export async function parseFormula(formulaStr) {
  return new Promise((resolve, reject) => {
    var chars = new antlr4.InputStream(formulaStr);
    let lexer = new FormulaTSLexer(chars);
    // console.time('parseFormula:tokens')
    var tokens = new antlr4.CommonTokenStream(lexer);
    // console.timeEnd('parseFormula:tokens')
    //tokens.getTokens(0,5)
    //@ts-ignore
    // console.log(`所有tokens如下 ::${tokens.getTokens(0,tokens.getNumberOfOnChannelTokens()).map(item=>`type[${item.type}]:${item.text}`)}`);
    //用token生成parser
    //     console.time('parseFormula:parser gen')
    var parser = new FormulaTSParser(tokens);
    // console.timeEnd('parseFormula:parser gen')

    //生成语法树遍历监听器
    parser.addErrorListener({
      syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
        reject({
          type: "syntaxError",
          recognizer,
          offendingSymbol,
          line,
          column,
          msg,
          e,
        });
      },
      reportAmbiguity: (
        recognizer,
        dfa,
        startIndex,
        stopIndex,
        exact,
        ambigAlts,
        configs
      ) => {
        // reject({
        //   type:"reportAmbiguity",
        //   recognizer, dfa, startIndex, stopIndex, exact, ambigAlts,configs
        // });
      },
      reportAttemptingFullContext: (
        recognizer,
        dfa,
        startIndex,
        stopIndex,
        conflictingAlts,
        configs
      ) => {
        // reject({
        //   type:"reportAttemptingFullContext",
        //   recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs
        // });
      },
      reportContextSensitivity: (
        recognizer,
        dfa,
        startIndex,
        stopIndex,
        conflictingAlts,
        configs
      ) => {
        // reject(
        //   {
        //     type:"reportContextSensitivity",
        //     recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs
        //   }
        // );
      },
    });
    //配置parser 生成语法树
    parser.buildParseTrees = true;
    var tree = parser.formulaUnit();
    resolve(tree);
  });
}
