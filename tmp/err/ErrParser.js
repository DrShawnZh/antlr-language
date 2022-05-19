// Generated from ./Err.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import ErrListener from './ErrListener.js';
import ErrVisitor from './ErrVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0005\n\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0002\u0002\u0003\u0002\u0002",
    "\u0002\u0002\b\u0002\u0004\u0003\u0002\u0002\u0002\u0004\u0005\u0007",
    "\u0003\u0002\u0002\u0005\u0006\u0007\u0005\u0002\u0002\u0006\u0007\u0007",
    "\u0004\u0002\u0002\u0007\b\b\u0002\u0001\u0002\b\u0003\u0003\u0002\u0002",
    "\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ErrParser extends antlr4.Parser {

    static grammarFileName = "Err.g4";
    static literalNames = [ null, "'class'", "'member'" ];
    static symbolicNames = [ null, null, null, "ID" ];
    static ruleNames = [ "file" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ErrParser.ruleNames;
        this.literalNames = ErrParser.literalNames;
        this.symbolicNames = ErrParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ErrParser.RULE_file);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 2;
	        this.match(ErrParser.T__0);
	        this.state = 3;
	        localctx._ID = this.match(ErrParser.ID);
	        this.state = 4;
	        this.match(ErrParser.T__1);
	        console.log((localctx._ID===null ? null : localctx._ID.text))
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

ErrParser.EOF = antlr4.Token.EOF;
ErrParser.T__0 = 1;
ErrParser.T__1 = 2;
ErrParser.ID = 3;

ErrParser.RULE_file = 0;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ErrParser.RULE_file;
        this._ID = null; // Token
    }

	ID() {
	    return this.getToken(ErrParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ErrListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ErrListener ) {
	        listener.exitFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ErrVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ErrParser.FileContext = FileContext; 
