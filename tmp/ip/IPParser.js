// Generated from ./IP.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import IPVisitor from './IPVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0007\u001b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002",
    "\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006\u0002",
    "\u0002\u0002\u0018\u0002\t\u0003\u0002\u0002\u0002\u0004\r\u0003\u0002",
    "\u0002\u0002\u0006\u0012\u0003\u0002\u0002\u0002\b\n\u0005\u0004\u0003",
    "\u0002\t\b\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b",
    "\t\u0003\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f\u0003\u0003",
    "\u0002\u0002\u0002\r\u000e\u0005\u0006\u0004\u0002\u000e\u000f\u0007",
    "\u0004\u0002\u0002\u000f\u0010\u0007\u0006\u0002\u0002\u0010\u0011\u0007",
    "\u0005\u0002\u0002\u0011\u0005\u0003\u0002\u0002\u0002\u0012\u0013\u0007",
    "\u0006\u0002\u0002\u0013\u0014\u0007\u0003\u0002\u0002\u0014\u0015\u0007",
    "\u0006\u0002\u0002\u0015\u0016\u0007\u0003\u0002\u0002\u0016\u0017\u0007",
    "\u0006\u0002\u0002\u0017\u0018\u0007\u0003\u0002\u0002\u0018\u0019\u0007",
    "\u0006\u0002\u0002\u0019\u0007\u0003\u0002\u0002\u0002\u0003\u000b"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class IPParser extends antlr4.Parser {

    static grammarFileName = "IP.g4";
    static literalNames = [ null, "'.'", null, "'\n'", null, "' '" ];
    static symbolicNames = [ null, null, "STRING", "NL", "INT", "WS" ];
    static ruleNames = [ "file", "row", "ip" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = IPParser.ruleNames;
        this.literalNames = IPParser.literalNames;
        this.symbolicNames = IPParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, IPParser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.row();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===IPParser.INT);
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



	row() {
	    let localctx = new RowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, IPParser.RULE_row);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this.ip();
	        this.state = 12;
	        this.match(IPParser.STRING);
	        this.state = 13;
	        this.match(IPParser.INT);
	        this.state = 14;
	        this.match(IPParser.NL);
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



	ip() {
	    let localctx = new IpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, IPParser.RULE_ip);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(IPParser.INT);
	        this.state = 17;
	        this.match(IPParser.T__0);
	        this.state = 18;
	        this.match(IPParser.INT);
	        this.state = 19;
	        this.match(IPParser.T__0);
	        this.state = 20;
	        this.match(IPParser.INT);
	        this.state = 21;
	        this.match(IPParser.T__0);
	        this.state = 22;
	        this.match(IPParser.INT);
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

IPParser.EOF = antlr4.Token.EOF;
IPParser.T__0 = 1;
IPParser.STRING = 2;
IPParser.NL = 3;
IPParser.INT = 4;
IPParser.WS = 5;

IPParser.RULE_file = 0;
IPParser.RULE_row = 1;
IPParser.RULE_ip = 2;

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
        this.ruleIndex = IPParser.RULE_file;
    }

	row = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RowContext);
	    } else {
	        return this.getTypedRuleContext(RowContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof IPVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IPParser.RULE_row;
    }

	ip() {
	    return this.getTypedRuleContext(IpContext,0);
	};

	STRING() {
	    return this.getToken(IPParser.STRING, 0);
	};

	INT() {
	    return this.getToken(IPParser.INT, 0);
	};

	NL() {
	    return this.getToken(IPParser.NL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof IPVisitor ) {
	        return visitor.visitRow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IPParser.RULE_ip;
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(IPParser.INT);
	    } else {
	        return this.getToken(IPParser.INT, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof IPVisitor ) {
	        return visitor.visitIp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




IPParser.FileContext = FileContext; 
IPParser.RowContext = RowContext; 
IPParser.IpContext = IpContext; 
