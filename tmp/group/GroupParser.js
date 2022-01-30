// Generated from ./Group.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import GroupVisitor from './GroupVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0005\u0014\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002",
    "\u000b\u0003\u0003\u0003\u0003\u0006\u0003\u0010\n\u0003\r\u0003\u000e",
    "\u0003\u0011\u0003\u0003\u0002\u0002\u0004\u0002\u0004\u0002\u0002\u0002",
    "\u0013\u0002\t\u0003\u0002\u0002\u0002\u0004\u000f\u0003\u0002\u0002",
    "\u0002\u0006\u0007\u0005\u0004\u0003\u0002\u0007\b\u0007\u0004\u0002",
    "\u0002\b\n\u0003\u0002\u0002\u0002\t\u0006\u0003\u0002\u0002\u0002\n",
    "\u000b\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b",
    "\f\u0003\u0002\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u000e\u0007",
    "\u0005\u0002\u0002\u000e\u0010\b\u0003\u0001\u0002\u000f\r\u0003\u0002",
    "\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002",
    "\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0005\u0003\u0002",
    "\u0002\u0002\u0004\u000b\u0011"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class GroupParser extends antlr4.Parser {

    static grammarFileName = "Group.g4";
    static literalNames = [ null, "'\t'" ];
    static symbolicNames = [ null, "TAB", "NL", "STUFF" ];
    static ruleNames = [ "file", "row" ];

    constructor(input, col) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GroupParser.ruleNames;
        this.literalNames = GroupParser.literalNames;
        this.symbolicNames = GroupParser.symbolicNames;

          this.col = col;

    }

    get atn() {
        return atn;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GroupParser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 4;
	            this.row();
	            this.state = 5;
	            this.match(GroupParser.NL);
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===GroupParser.STUFF);
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
	    this.enterRule(localctx, 2, GroupParser.RULE_row);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 11;
	            localctx._STUFF = this.match(GroupParser.STUFF);

	                  localctx.i++;
	                  if (localctx.i == this.col) {
	                    console.log((localctx._STUFF===null ? null : localctx._STUFF.text))
	                  };
	                
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===GroupParser.STUFF);
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

GroupParser.EOF = antlr4.Token.EOF;
GroupParser.TAB = 1;
GroupParser.NL = 2;
GroupParser.STUFF = 3;

GroupParser.RULE_file = 0;
GroupParser.RULE_row = 1;

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
        this.ruleIndex = GroupParser.RULE_file;
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

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GroupParser.NL);
	    } else {
	        return this.getToken(GroupParser.NL, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GroupVisitor ) {
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
        this.ruleIndex = GroupParser.RULE_row;
        this.i = 0
        this._STUFF = null; // Token
    }

	STUFF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GroupParser.STUFF);
	    } else {
	        return this.getToken(GroupParser.STUFF, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GroupVisitor ) {
	        return visitor.visitRow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GroupParser.FileContext = FileContext; 
GroupParser.RowContext = RowContext; 
