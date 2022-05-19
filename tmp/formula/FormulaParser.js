// Generated from ./tmp/formula/Formula.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import FormulaListener from './FormulaListener.js';
import FormulaVisitor from './FormulaVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0016T\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0005\u0002\u001b\n\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003 \n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0005\u0004&\n\u0004\u0007\u0004(\n\u0004\f\u0004",
    "\u000e\u0004+\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000bG\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000bM\n\u000b\f\u000b\u000e",
    "\u000bP\u000b\u000b\u0003\f\u0003\f\u0003\f\u0002\u0003\u0014\r\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002\u0003\u0003\u0002",
    "\u0006\u000f\u0002S\u0002\u001a\u0003\u0002\u0002\u0002\u0004\u001c",
    "\u0003\u0002\u0002\u0002\u0006)\u0003\u0002\u0002\u0002\b,\u0003\u0002",
    "\u0002\u0002\n.\u0003\u0002\u0002\u0002\f0\u0003\u0002\u0002\u0002\u000e",
    "2\u0003\u0002\u0002\u0002\u00104\u0003\u0002\u0002\u0002\u00126\u0003",
    "\u0002\u0002\u0002\u0014F\u0003\u0002\u0002\u0002\u0016Q\u0003\u0002",
    "\u0002\u0002\u0018\u001b\u0005\u0004\u0003\u0002\u0019\u001b\u0005\u0014",
    "\u000b\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u0019\u0003\u0002",
    "\u0002\u0002\u001b\u0003\u0003\u0002\u0002\u0002\u001c\u001d\u0005\n",
    "\u0006\u0002\u001d\u001f\u0007\u0003\u0002\u0002\u001e \u0005\u0006",
    "\u0004\u0002\u001f\u001e\u0003\u0002\u0002\u0002\u001f \u0003\u0002",
    "\u0002\u0002 !\u0003\u0002\u0002\u0002!\"\u0007\u0004\u0002\u0002\"",
    "\u0005\u0003\u0002\u0002\u0002#%\u0005\b\u0005\u0002$&\u0007\u0005\u0002",
    "\u0002%$\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&(\u0003\u0002",
    "\u0002\u0002\'#\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'",
    "\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\u0007\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002,-\u0005\u0014\u000b\u0002-\t",
    "\u0003\u0002\u0002\u0002./\u0007\u0011\u0002\u0002/\u000b\u0003\u0002",
    "\u0002\u000201\u0007\u0016\u0002\u00021\r\u0003\u0002\u0002\u000223",
    "\u0007\u0010\u0002\u00023\u000f\u0003\u0002\u0002\u000245\u0007\u0012",
    "\u0002\u00025\u0011\u0003\u0002\u0002\u000267\u0007\u0013\u0002\u0002",
    "7\u0013\u0003\u0002\u0002\u000289\b\u000b\u0001\u00029:\u0007\u0003",
    "\u0002\u0002:;\u0005\u0014\u000b\u0002;<\u0007\u0004\u0002\u0002<G\u0003",
    "\u0002\u0002\u0002=>\u0005\f\u0007\u0002>?\u0005\u0016\f\u0002?@\u0005",
    "\u0014\u000b\b@G\u0003\u0002\u0002\u0002AG\u0005\f\u0007\u0002BG\u0005",
    "\u0004\u0003\u0002CG\u0005\u000e\b\u0002DG\u0005\u0012\n\u0002EG\u0005",
    "\u0010\t\u0002F8\u0003\u0002\u0002\u0002F=\u0003\u0002\u0002\u0002F",
    "A\u0003\u0002\u0002\u0002FB\u0003\u0002\u0002\u0002FC\u0003\u0002\u0002",
    "\u0002FD\u0003\u0002\u0002\u0002FE\u0003\u0002\u0002\u0002GN\u0003\u0002",
    "\u0002\u0002HI\f\n\u0002\u0002IJ\u0005\u0016\f\u0002JK\u0005\u0014\u000b",
    "\u000bKM\u0003\u0002\u0002\u0002LH\u0003\u0002\u0002\u0002MP\u0003\u0002",
    "\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002O\u0015",
    "\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\t\u0002\u0002\u0002",
    "R\u0017\u0003\u0002\u0002\u0002\b\u001a\u001f%)FN"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FormulaParser extends antlr4.Parser {

    static grammarFileName = "Formula.g4";
    static literalNames = [ null, "'('", "')'", "','", "'>'", "'>='", "'<'", 
                            "'<='", "'=='", "'+'", "'*'", "'/'", "'-'", 
                            "'!='" ];
    static symbolicNames = [ null, null, null, null, "OPERATE_GREATE", "OPERATE_GREATE_EQ", 
                             "OPERATE_LESS", "OPERATE_LESS_EQ", "OPERATE_EQ", 
                             "OPERATE_PLUS", "OPERATE_multiply", "OPERATE_DIVIDE", 
                             "OPERATE_MINUS", "OPERATE_NEQ", "NUMBER", "FORMULANAME", 
                             "STRING", "CELLLoc", "SheetName", "WS", "CONSTVAR" ];
    static ruleNames = [ "formulaUnit", "formulaFunction", "formulaParams", 
                         "formulaParam", "formulaFunctionName", "formulaParamConst", 
                         "formulaParamNum", "formulaParamString", "formulaCELLLoc", 
                         "formulaExpress", "formulaOperation" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FormulaParser.ruleNames;
        this.literalNames = FormulaParser.literalNames;
        this.symbolicNames = FormulaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.formulaExpress_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    formulaExpress_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	formulaUnit() {
	    let localctx = new FormulaUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FormulaParser.RULE_formulaUnit);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.formulaFunction();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.formulaExpress(0);
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



	formulaFunction() {
	    let localctx = new FormulaFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FormulaParser.RULE_formulaFunction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.formulaFunctionName();
	        this.state = 27;
	        this.match(FormulaParser.T__0);
	        this.state = 29;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 28;
	            this.formulaParams();

	        }
	        this.state = 31;
	        this.match(FormulaParser.T__1);
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



	formulaParams() {
	    let localctx = new FormulaParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FormulaParser.RULE_formulaParams);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaParser.T__0) | (1 << FormulaParser.NUMBER) | (1 << FormulaParser.FORMULANAME) | (1 << FormulaParser.STRING) | (1 << FormulaParser.CELLLoc) | (1 << FormulaParser.CONSTVAR))) !== 0)) {
	            this.state = 33;
	            this.formulaParam();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===FormulaParser.T__2) {
	                this.state = 34;
	                this.match(FormulaParser.T__2);
	            }

	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	formulaParam() {
	    let localctx = new FormulaParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FormulaParser.RULE_formulaParam);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.formulaExpress(0);
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



	formulaFunctionName() {
	    let localctx = new FormulaFunctionNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FormulaParser.RULE_formulaFunctionName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(FormulaParser.FORMULANAME);
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



	formulaParamConst() {
	    let localctx = new FormulaParamConstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FormulaParser.RULE_formulaParamConst);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(FormulaParser.CONSTVAR);
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



	formulaParamNum() {
	    let localctx = new FormulaParamNumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FormulaParser.RULE_formulaParamNum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(FormulaParser.NUMBER);
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



	formulaParamString() {
	    let localctx = new FormulaParamStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FormulaParser.RULE_formulaParamString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(FormulaParser.STRING);
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



	formulaCELLLoc() {
	    let localctx = new FormulaCELLLocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FormulaParser.RULE_formulaCELLLoc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(FormulaParser.CELLLoc);
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


	formulaExpress(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FormulaExpressContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, FormulaParser.RULE_formulaExpress, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 55;
	            this.match(FormulaParser.T__0);
	            this.state = 56;
	            this.formulaExpress(0);
	            this.state = 57;
	            this.match(FormulaParser.T__1);
	            break;

	        case 2:
	            this.state = 59;
	            this.formulaParamConst();
	            this.state = 60;
	            this.formulaOperation();
	            this.state = 61;
	            this.formulaExpress(6);
	            break;

	        case 3:
	            this.state = 63;
	            this.formulaParamConst();
	            break;

	        case 4:
	            this.state = 64;
	            this.formulaFunction();
	            break;

	        case 5:
	            this.state = 65;
	            this.formulaParamNum();
	            break;

	        case 6:
	            this.state = 66;
	            this.formulaCELLLoc();
	            break;

	        case 7:
	            this.state = 67;
	            this.formulaParamString();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 76;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new FormulaExpressContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_formulaExpress);
	                this.state = 70;
	                if (!( this.precpred(this._ctx, 8))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                }
	                this.state = 71;
	                this.formulaOperation();
	                this.state = 72;
	                this.formulaExpress(9); 
	            }
	            this.state = 78;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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



	formulaOperation() {
	    let localctx = new FormulaOperationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FormulaParser.RULE_formulaOperation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormulaParser.OPERATE_GREATE) | (1 << FormulaParser.OPERATE_GREATE_EQ) | (1 << FormulaParser.OPERATE_LESS) | (1 << FormulaParser.OPERATE_LESS_EQ) | (1 << FormulaParser.OPERATE_EQ) | (1 << FormulaParser.OPERATE_PLUS) | (1 << FormulaParser.OPERATE_multiply) | (1 << FormulaParser.OPERATE_DIVIDE) | (1 << FormulaParser.OPERATE_MINUS) | (1 << FormulaParser.OPERATE_NEQ))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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


}

FormulaParser.EOF = antlr4.Token.EOF;
FormulaParser.T__0 = 1;
FormulaParser.T__1 = 2;
FormulaParser.T__2 = 3;
FormulaParser.OPERATE_GREATE = 4;
FormulaParser.OPERATE_GREATE_EQ = 5;
FormulaParser.OPERATE_LESS = 6;
FormulaParser.OPERATE_LESS_EQ = 7;
FormulaParser.OPERATE_EQ = 8;
FormulaParser.OPERATE_PLUS = 9;
FormulaParser.OPERATE_multiply = 10;
FormulaParser.OPERATE_DIVIDE = 11;
FormulaParser.OPERATE_MINUS = 12;
FormulaParser.OPERATE_NEQ = 13;
FormulaParser.NUMBER = 14;
FormulaParser.FORMULANAME = 15;
FormulaParser.STRING = 16;
FormulaParser.CELLLoc = 17;
FormulaParser.SheetName = 18;
FormulaParser.WS = 19;
FormulaParser.CONSTVAR = 20;

FormulaParser.RULE_formulaUnit = 0;
FormulaParser.RULE_formulaFunction = 1;
FormulaParser.RULE_formulaParams = 2;
FormulaParser.RULE_formulaParam = 3;
FormulaParser.RULE_formulaFunctionName = 4;
FormulaParser.RULE_formulaParamConst = 5;
FormulaParser.RULE_formulaParamNum = 6;
FormulaParser.RULE_formulaParamString = 7;
FormulaParser.RULE_formulaCELLLoc = 8;
FormulaParser.RULE_formulaExpress = 9;
FormulaParser.RULE_formulaOperation = 10;

class FormulaUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaUnit;
    }

	formulaFunction() {
	    return this.getTypedRuleContext(FormulaFunctionContext,0);
	};

	formulaExpress() {
	    return this.getTypedRuleContext(FormulaExpressContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaUnit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaFunction;
    }

	formulaFunctionName() {
	    return this.getTypedRuleContext(FormulaFunctionNameContext,0);
	};

	formulaParams() {
	    return this.getTypedRuleContext(FormulaParamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaParams;
    }

	formulaParam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaParamContext);
	    } else {
	        return this.getTypedRuleContext(FormulaParamContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaParams(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaParams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaParam;
    }

	formulaExpress() {
	    return this.getTypedRuleContext(FormulaExpressContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaFunctionNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaFunctionName;
    }

	FORMULANAME() {
	    return this.getToken(FormulaParser.FORMULANAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaFunctionName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaFunctionName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaFunctionName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaParamConstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaParamConst;
    }

	CONSTVAR() {
	    return this.getToken(FormulaParser.CONSTVAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaParamConst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaParamConst(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaParamConst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaParamNumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaParamNum;
    }

	NUMBER() {
	    return this.getToken(FormulaParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaParamNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaParamNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaParamNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaParamStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaParamString;
    }

	STRING() {
	    return this.getToken(FormulaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaParamString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaParamString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaParamString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaCELLLocContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaCELLLoc;
    }

	CELLLoc() {
	    return this.getToken(FormulaParser.CELLLoc, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaCELLLoc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaCELLLoc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaCELLLoc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaExpressContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaExpress;
    }

	formulaExpress = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaExpressContext);
	    } else {
	        return this.getTypedRuleContext(FormulaExpressContext,i);
	    }
	};

	formulaParamConst() {
	    return this.getTypedRuleContext(FormulaParamConstContext,0);
	};

	formulaOperation() {
	    return this.getTypedRuleContext(FormulaOperationContext,0);
	};

	formulaFunction() {
	    return this.getTypedRuleContext(FormulaFunctionContext,0);
	};

	formulaParamNum() {
	    return this.getTypedRuleContext(FormulaParamNumContext,0);
	};

	formulaCELLLoc() {
	    return this.getTypedRuleContext(FormulaCELLLocContext,0);
	};

	formulaParamString() {
	    return this.getTypedRuleContext(FormulaParamStringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaExpress(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaExpress(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaExpress(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaOperationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_formulaOperation;
    }

	OPERATE_GREATE() {
	    return this.getToken(FormulaParser.OPERATE_GREATE, 0);
	};

	OPERATE_GREATE_EQ() {
	    return this.getToken(FormulaParser.OPERATE_GREATE_EQ, 0);
	};

	OPERATE_LESS() {
	    return this.getToken(FormulaParser.OPERATE_LESS, 0);
	};

	OPERATE_LESS_EQ() {
	    return this.getToken(FormulaParser.OPERATE_LESS_EQ, 0);
	};

	OPERATE_EQ() {
	    return this.getToken(FormulaParser.OPERATE_EQ, 0);
	};

	OPERATE_NEQ() {
	    return this.getToken(FormulaParser.OPERATE_NEQ, 0);
	};

	OPERATE_PLUS() {
	    return this.getToken(FormulaParser.OPERATE_PLUS, 0);
	};

	OPERATE_MINUS() {
	    return this.getToken(FormulaParser.OPERATE_MINUS, 0);
	};

	OPERATE_DIVIDE() {
	    return this.getToken(FormulaParser.OPERATE_DIVIDE, 0);
	};

	OPERATE_multiply() {
	    return this.getToken(FormulaParser.OPERATE_multiply, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.enterFormulaOperation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormulaListener ) {
	        listener.exitFormulaOperation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitFormulaOperation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FormulaParser.FormulaUnitContext = FormulaUnitContext; 
FormulaParser.FormulaFunctionContext = FormulaFunctionContext; 
FormulaParser.FormulaParamsContext = FormulaParamsContext; 
FormulaParser.FormulaParamContext = FormulaParamContext; 
FormulaParser.FormulaFunctionNameContext = FormulaFunctionNameContext; 
FormulaParser.FormulaParamConstContext = FormulaParamConstContext; 
FormulaParser.FormulaParamNumContext = FormulaParamNumContext; 
FormulaParser.FormulaParamStringContext = FormulaParamStringContext; 
FormulaParser.FormulaCELLLocContext = FormulaCELLLocContext; 
FormulaParser.FormulaExpressContext = FormulaExpressContext; 
FormulaParser.FormulaOperationContext = FormulaOperationContext; 
