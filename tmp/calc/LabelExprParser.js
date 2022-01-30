// Generated from ./LabelExpr.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import LabelExprVisitor from './LabelExprVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\r-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0017\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004 \n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004(\n\u0004\f\u0004\u000e\u0004",
    "+\u000b\u0004\u0003\u0004\u0002\u0003\u0006\u0005\u0002\u0004\u0006",
    "\u0002\u0004\u0003\u0002\n\u000b\u0003\u0002\f\r\u00020\u0002\t\u0003",
    "\u0002\u0002\u0002\u0004\u0016\u0003\u0002\u0002\u0002\u0006\u001f\u0003",
    "\u0002\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003\u0002\u0002",
    "\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002",
    "\u000b\f\u0003\u0002\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u000e",
    "\u0005\u0006\u0004\u0002\u000e\u000f\u0007\b\u0002\u0002\u000f\u0017",
    "\u0003\u0002\u0002\u0002\u0010\u0011\u0007\u0006\u0002\u0002\u0011\u0012",
    "\u0007\u0003\u0002\u0002\u0012\u0013\u0005\u0006\u0004\u0002\u0013\u0014",
    "\u0007\b\u0002\u0002\u0014\u0017\u0003\u0002\u0002\u0002\u0015\u0017",
    "\u0007\b\u0002\u0002\u0016\r\u0003\u0002\u0002\u0002\u0016\u0010\u0003",
    "\u0002\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0005\u0003",
    "\u0002\u0002\u0002\u0018\u0019\b\u0004\u0001\u0002\u0019 \u0007\u0007",
    "\u0002\u0002\u001a \u0007\u0006\u0002\u0002\u001b\u001c\u0007\u0004",
    "\u0002\u0002\u001c\u001d\u0005\u0006\u0004\u0002\u001d\u001e\u0007\u0005",
    "\u0002\u0002\u001e \u0003\u0002\u0002\u0002\u001f\u0018\u0003\u0002",
    "\u0002\u0002\u001f\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002",
    "\u0002\u0002 )\u0003\u0002\u0002\u0002!\"\f\u0007\u0002\u0002\"#\t\u0002",
    "\u0002\u0002#(\u0005\u0006\u0004\b$%\f\u0006\u0002\u0002%&\t\u0003\u0002",
    "\u0002&(\u0005\u0006\u0004\u0007\'!\u0003\u0002\u0002\u0002\'$\u0003",
    "\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002",
    ")*\u0003\u0002\u0002\u0002*\u0007\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002\u0007\u000b\u0016\u001f\')"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LabelExprParser extends antlr4.Parser {

    static grammarFileName = "LabelExpr.g4";
    static literalNames = [ null, "'='", "'('", "')'", null, null, null, 
                            null, "'*'", "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, "ID", "INT", "NEWLINE", 
                             "WS", "MUL", "DIV", "ADD", "SUB" ];
    static ruleNames = [ "prog", "stat", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LabelExprParser.ruleNames;
        this.literalNames = LabelExprParser.literalNames;
        this.symbolicNames = LabelExprParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LabelExprParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.stat();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LabelExprParser.T__1) | (1 << LabelExprParser.ID) | (1 << LabelExprParser.INT) | (1 << LabelExprParser.NEWLINE))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LabelExprParser.RULE_stat);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrintExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 11;
	            this.expr(0);
	            this.state = 12;
	            this.match(LabelExprParser.NEWLINE);
	            break;

	        case 2:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 14;
	            this.match(LabelExprParser.ID);
	            this.state = 15;
	            this.match(LabelExprParser.T__0);
	            this.state = 16;
	            this.expr(0);
	            this.state = 17;
	            this.match(LabelExprParser.NEWLINE);
	            break;

	        case 3:
	            localctx = new BlankContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 19;
	            this.match(LabelExprParser.NEWLINE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, LabelExprParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LabelExprParser.INT:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 23;
	            this.match(LabelExprParser.INT);
	            break;
	        case LabelExprParser.ID:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 24;
	            this.match(LabelExprParser.ID);
	            break;
	        case LabelExprParser.T__1:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 25;
	            this.match(LabelExprParser.T__1);
	            this.state = 26;
	            this.expr(0);
	            this.state = 27;
	            this.match(LabelExprParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 37;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LabelExprParser.RULE_expr);
	                    this.state = 31;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 32;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===LabelExprParser.MUL || _la===LabelExprParser.DIV)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 33;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LabelExprParser.RULE_expr);
	                    this.state = 34;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 35;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===LabelExprParser.ADD || _la===LabelExprParser.SUB)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 36;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 41;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

LabelExprParser.EOF = antlr4.Token.EOF;
LabelExprParser.T__0 = 1;
LabelExprParser.T__1 = 2;
LabelExprParser.T__2 = 3;
LabelExprParser.ID = 4;
LabelExprParser.INT = 5;
LabelExprParser.NEWLINE = 6;
LabelExprParser.WS = 7;
LabelExprParser.MUL = 8;
LabelExprParser.DIV = 9;
LabelExprParser.ADD = 10;
LabelExprParser.SUB = 11;

LabelExprParser.RULE_prog = 0;
LabelExprParser.RULE_stat = 1;
LabelExprParser.RULE_expr = 2;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LabelExprParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LabelExprVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LabelExprParser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BlankContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEWLINE() {
	    return this.getToken(LabelExprParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LabelExprVisitor ) {
	        return visitor.visitBlank(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LabelExprParser.BlankContext = BlankContext;

class PrintExprContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(LabelExprParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LabelExprVisitor ) {
	        return visitor.visitPrintExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LabelExprParser.PrintExprContext = PrintExprContext;

class AssignContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(LabelExprParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(LabelExprParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LabelExprVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LabelExprParser.AssignContext = AssignContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LabelExprParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof LabelExprVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LabelExprParser.ParensContext = ParensContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(LabelExprParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(LabelExprParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LabelExprVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LabelExprParser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(LabelExprParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(LabelExprParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LabelExprVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LabelExprParser.AddSubContext = AddSubContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(LabelExprParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LabelExprVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LabelExprParser.IdContext = IdContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(LabelExprParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LabelExprVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LabelExprParser.IntContext = IntContext;


LabelExprParser.ProgContext = ProgContext; 
LabelExprParser.StatContext = StatContext; 
LabelExprParser.ExprContext = ExprContext; 
