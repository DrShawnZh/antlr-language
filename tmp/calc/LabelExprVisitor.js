// Generated from ./LabelExpr.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by LabelExprParser.

export default class LabelExprVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by LabelExprParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabelExprParser#printExpr.
	visitPrintExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabelExprParser#assign.
	visitAssign(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabelExprParser#blank.
	visitBlank(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabelExprParser#parens.
	visitParens(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabelExprParser#MulDiv.
	visitMulDiv(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabelExprParser#AddSub.
	visitAddSub(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabelExprParser#id.
	visitId(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LabelExprParser#int.
	visitInt(ctx) {
	  return this.visitChildren(ctx);
	}



}