// Generated from ./Cvs.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import CvsListener from './CvsListener.js';
import CvsVisitor from './CvsVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0007-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0006\u0002\u000f\n\u0002\r\u0002\u000e\u0002\u0010\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u001e\n",
    "\u0004\f\u0004\u000e\u0004!\u000b\u0004\u0003\u0004\u0005\u0004$\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "+\n\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002\u0002",
    "\u0002-\u0002\n\u0003\u0002\u0002\u0002\u0004\u0014\u0003\u0002\u0002",
    "\u0002\u0006\u0017\u0003\u0002\u0002\u0002\b*\u0003\u0002\u0002\u0002",
    "\n\u000e\u0005\u0004\u0003\u0002\u000b\f\u0005\u0006\u0004\u0002\f\r",
    "\b\u0002\u0001\u0002\r\u000f\u0003\u0002\u0002\u0002\u000e\u000b\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u000e\u0003",
    "\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u0012\u0003",
    "\u0002\u0002\u0002\u0012\u0013\b\u0002\u0001\u0002\u0013\u0003\u0003",
    "\u0002\u0002\u0002\u0014\u0015\u0005\u0006\u0004\u0002\u0015\u0016\b",
    "\u0003\u0001\u0002\u0016\u0005\u0003\u0002\u0002\u0002\u0017\u0018\u0005",
    "\b\u0005\u0002\u0018\u001f\b\u0004\u0001\u0002\u0019\u001a\u0007\u0003",
    "\u0002\u0002\u001a\u001b\u0005\b\u0005\u0002\u001b\u001c\b\u0004\u0001",
    "\u0002\u001c\u001e\u0003\u0002\u0002\u0002\u001d\u0019\u0003\u0002\u0002",
    "\u0002\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002",
    "\u0002\u001f \u0003\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f",
    "\u0003\u0002\u0002\u0002\"$\u0007\u0004\u0002\u0002#\"\u0003\u0002\u0002",
    "\u0002#$\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&\u0007\u0005",
    "\u0002\u0002&\u0007\u0003\u0002\u0002\u0002\'+\u0007\u0006\u0002\u0002",
    "(+\u0007\u0007\u0002\u0002)+\u0003\u0002\u0002\u0002*\'\u0003\u0002",
    "\u0002\u0002*(\u0003\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+\t",
    "\u0003\u0002\u0002\u0002\u0006\u0010\u001f#*"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CvsParser extends antlr4.Parser {

    static grammarFileName = "Cvs.g4";
    static literalNames = [ null, "','", "'\r'", "'\n'" ];
    static symbolicNames = [ null, null, null, null, "TEXT", "STRING" ];
    static ruleNames = [ "file", "hdr", "row", "field" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CvsParser.ruleNames;
        this.literalNames = CvsParser.literalNames;
        this.symbolicNames = CvsParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CvsParser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        localctx._hdr = this.hdr();
	        this.state = 12; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 9;
	            localctx._row = this.row((localctx._hdr===null ? null : this._input.getText(new antlr4.Interval(localctx._hdr.start,localctx._hdr.stop))).split(","));
	            localctx.rows.push(localctx._row);
	            localctx.i++
	            this.state = 14; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CvsParser.T__0) | (1 << CvsParser.T__1) | (1 << CvsParser.T__2) | (1 << CvsParser.TEXT) | (1 << CvsParser.STRING))) !== 0));

	              console.log(localctx.i + 'rows')
	              for (let row of localctx.rows) {
	                console.log('row token interval' + row.getSourceInterval())
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



	hdr() {
	    let localctx = new HdrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CvsParser.RULE_hdr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.row(null);
	        console.log(`header: ${this._input.getText(new antlr4.Interval(localctx.start, this._input.LT(-1))).trim()}`)
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



	row(columns) {
	    let localctx = new RowContext(this, this._ctx, this.state, columns);
	    this.enterRule(localctx, 4, CvsParser.RULE_row);

	      localctx.values =  new Map()

	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        localctx._field = this.field();

	            if (localctx.columns != null) {
	              localctx.values.set(localctx.columns[localctx.col++].trim(), (localctx._field===null ? null : this._input.getText(new antlr4.Interval(localctx._field.start,localctx._field.stop))).trim())
	            }
	          
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CvsParser.T__0) {
	            this.state = 23;
	            this.match(CvsParser.T__0);
	            this.state = 24;
	            localctx._field = this.field();

	                   if (localctx.columns != null) {
	                    localctx.values.set(localctx.columns[localctx.col++].trim(), (localctx._field===null ? null : this._input.getText(new antlr4.Interval(localctx._field.start,localctx._field.stop))).trim())
	                  }
	                
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CvsParser.T__1) {
	            this.state = 32;
	            this.match(CvsParser.T__1);
	        }

	        this.state = 35;
	        this.match(CvsParser.T__2);
	        this._ctx.stop = this._input.LT(-1);

	          if (localctx.values != null && localctx.values.size > 0) {
	            let str = "";
	            for (let key of localctx.values.keys()) {
	              str += `${key} = ${localctx.values.get(key)};`
	            }
	            console.log(`values: ${str}`);
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CvsParser.RULE_field);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CvsParser.TEXT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.match(CvsParser.TEXT);
	            break;
	        case CvsParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.match(CvsParser.STRING);
	            break;
	        case CvsParser.T__0:
	        case CvsParser.T__1:
	        case CvsParser.T__2:
	            this.enterOuterAlt(localctx, 3);

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

CvsParser.EOF = antlr4.Token.EOF;
CvsParser.T__0 = 1;
CvsParser.T__1 = 2;
CvsParser.T__2 = 3;
CvsParser.TEXT = 4;
CvsParser.STRING = 5;

CvsParser.RULE_file = 0;
CvsParser.RULE_hdr = 1;
CvsParser.RULE_row = 2;
CvsParser.RULE_field = 3;

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
        this.ruleIndex = CvsParser.RULE_file;
        this.i = 0
        this._hdr = null; // HdrContext
        this._row = null; // RowContext
        this.rows = []; // of RowContexts
    }

	hdr() {
	    return this.getTypedRuleContext(HdrContext,0);
	};

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

	enterRule(listener) {
	    if(listener instanceof CvsListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CvsListener ) {
	        listener.exitFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CvsVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HdrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CvsParser.RULE_hdr;
    }

	row() {
	    return this.getTypedRuleContext(RowContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CvsListener ) {
	        listener.enterHdr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CvsListener ) {
	        listener.exitHdr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CvsVisitor ) {
	        return visitor.visitHdr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState, columns) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CvsParser.RULE_row;
        this.columns = null
        this.values = null
        this.col = 0
        this._field = null; // FieldContext
        this.columns = columns || null;
    }

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CvsListener ) {
	        listener.enterRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CvsListener ) {
	        listener.exitRow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CvsVisitor ) {
	        return visitor.visitRow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CvsParser.RULE_field;
    }

	TEXT() {
	    return this.getToken(CvsParser.TEXT, 0);
	};

	STRING() {
	    return this.getToken(CvsParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CvsListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CvsListener ) {
	        listener.exitField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CvsVisitor ) {
	        return visitor.visitField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CvsParser.FileContext = FileContext; 
CvsParser.HdrContext = HdrContext; 
CvsParser.RowContext = RowContext; 
CvsParser.FieldContext = FieldContext; 
