// Generated from ./ArrayInit.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitListener from './ArrayInitListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0007\u0016\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u000b\n\u0002",
    "\f\u0002\u000e\u0002\u000e\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0014\n\u0003\u0003\u0003\u0002\u0002",
    "\u0004\u0002\u0004\u0002\u0002\u0002\u0015\u0002\u0006\u0003\u0002\u0002",
    "\u0002\u0004\u0013\u0003\u0002\u0002\u0002\u0006\u0007\u0007\u0003\u0002",
    "\u0002\u0007\f\u0005\u0004\u0003\u0002\b\t\u0007\u0004\u0002\u0002\t",
    "\u000b\u0005\u0004\u0003\u0002\n\b\u0003\u0002\u0002\u0002\u000b\u000e",
    "\u0003\u0002\u0002\u0002\f\n\u0003\u0002\u0002\u0002\f\r\u0003\u0002",
    "\u0002\u0002\r\u000f\u0003\u0002\u0002\u0002\u000e\f\u0003\u0002\u0002",
    "\u0002\u000f\u0010\u0007\u0005\u0002\u0002\u0010\u0003\u0003\u0002\u0002",
    "\u0002\u0011\u0014\u0005\u0002\u0002\u0002\u0012\u0014\u0007\u0006\u0002",
    "\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0012\u0003\u0002\u0002",
    "\u0002\u0014\u0005\u0003\u0002\u0002\u0002\u0004\f\u0013"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ArrayInitParser extends antlr4.Parser {

    static grammarFileName = "ArrayInit.g4";
    static literalNames = [ null, "'{'", "','", "'}'" ];
    static symbolicNames = [ null, null, null, null, "INT", "WS" ];
    static ruleNames = [ "init", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArrayInitParser.ruleNames;
        this.literalNames = ArrayInitParser.literalNames;
        this.symbolicNames = ArrayInitParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ArrayInitParser.RULE_init);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.match(ArrayInitParser.T__0);
	        this.state = 5;
	        this.value();
	        this.state = 10;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ArrayInitParser.T__1) {
	            this.state = 6;
	            this.match(ArrayInitParser.T__1);
	            this.state = 7;
	            this.value();
	            this.state = 12;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 13;
	        this.match(ArrayInitParser.T__2);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ArrayInitParser.RULE_value);
	    try {
	        this.state = 17;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ArrayInitParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.init();
	            break;
	        case ArrayInitParser.INT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
	            this.match(ArrayInitParser.INT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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

ArrayInitParser.EOF = antlr4.Token.EOF;
ArrayInitParser.T__0 = 1;
ArrayInitParser.T__1 = 2;
ArrayInitParser.T__2 = 3;
ArrayInitParser.INT = 4;
ArrayInitParser.WS = 5;

ArrayInitParser.RULE_init = 0;
ArrayInitParser.RULE_value = 1;

class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_init;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ArrayInitListener ) {
	        listener.enterInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArrayInitListener ) {
	        listener.exitInit(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_value;
    }

	init() {
	    return this.getTypedRuleContext(InitContext,0);
	};

	INT() {
	    return this.getToken(ArrayInitParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArrayInitListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArrayInitListener ) {
	        listener.exitValue(this);
		}
	}


}




ArrayInitParser.InitContext = InitContext; 
ArrayInitParser.ValueContext = ValueContext; 
