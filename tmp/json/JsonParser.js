// Generated from ./Json.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import JsonVisitor from './JsonVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\r5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0005\u0002\u000f\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0017\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005!\n\u0005\f\u0005\u000e\u0005$\u000b\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005*\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u00063\n\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004",
    "\u0006\b\n\u0002\u0002\u00029\u0002\u000e\u0003\u0002\u0002\u0002\u0004",
    "\u0016\u0003\u0002\u0002\u0002\u0006\u0018\u0003\u0002\u0002\u0002\b",
    ")\u0003\u0002\u0002\u0002\n2\u0003\u0002\u0002\u0002\f\u000f\u0005\u0004",
    "\u0003\u0002\r\u000f\u0005\b\u0005\u0002\u000e\f\u0003\u0002\u0002\u0002",
    "\u000e\r\u0003\u0002\u0002\u0002\u000f\u0003\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0007\u0003\u0002\u0002\u0011\u0012\u0005\u0006\u0004\u0002",
    "\u0012\u0013\u0007\u0004\u0002\u0002\u0013\u0017\u0003\u0002\u0002\u0002",
    "\u0014\u0015\u0007\u0003\u0002\u0002\u0015\u0017\u0007\u0004\u0002\u0002",
    "\u0016\u0010\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002",
    "\u0017\u0005\u0003\u0002\u0002\u0002\u0018\u0019\u0007\f\u0002\u0002",
    "\u0019\u001a\u0007\u0005\u0002\u0002\u001a\u001b\u0005\n\u0006\u0002",
    "\u001b\u0007\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0006\u0002\u0002",
    "\u001d\"\u0005\n\u0006\u0002\u001e\u001f\u0007\u0007\u0002\u0002\u001f",
    "!\u0005\n\u0006\u0002 \u001e\u0003\u0002\u0002\u0002!$\u0003\u0002\u0002",
    "\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#%\u0003",
    "\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002%&\u0007\b\u0002\u0002",
    "&*\u0003\u0002\u0002\u0002\'(\u0007\u0006\u0002\u0002(*\u0007\b\u0002",
    "\u0002)\u001c\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002*\t",
    "\u0003\u0002\u0002\u0002+3\u0007\f\u0002\u0002,3\u0007\r\u0002\u0002",
    "-3\u0005\u0004\u0003\u0002.3\u0005\b\u0005\u0002/3\u0007\t\u0002\u0002",
    "03\u0007\n\u0002\u000213\u0007\u000b\u0002\u00022+\u0003\u0002\u0002",
    "\u00022,\u0003\u0002\u0002\u00022-\u0003\u0002\u0002\u00022.\u0003\u0002",
    "\u0002\u00022/\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000221\u0003",
    "\u0002\u0002\u00023\u000b\u0003\u0002\u0002\u0002\u0007\u000e\u0016",
    "\")2"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JsonParser extends antlr4.Parser {

    static grammarFileName = "Json.g4";
    static literalNames = [ null, "'{'", "'}'", "':'", "'['", "','", "']'", 
                            "'true'", "'false'", "'null'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "STRING", "NUMBER" ];
    static ruleNames = [ "json", "object", "pair", "array", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JsonParser.ruleNames;
        this.literalNames = JsonParser.literalNames;
        this.symbolicNames = JsonParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	json() {
	    let localctx = new JsonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JsonParser.RULE_json);
	    try {
	        this.state = 12;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JsonParser.T__0:
	            localctx = new ObjContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 10;
	            this.object();
	            break;
	        case JsonParser.T__3:
	            localctx = new ArrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 11;
	            this.array();
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



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JsonParser.RULE_object);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 14;
	            this.match(JsonParser.T__0);
	            this.state = 15;
	            this.pair();
	            this.state = 16;
	            this.match(JsonParser.T__1);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 18;
	            this.match(JsonParser.T__0);
	            this.state = 19;
	            this.match(JsonParser.T__1);
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



	pair() {
	    let localctx = new PairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JsonParser.RULE_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(JsonParser.STRING);
	        this.state = 23;
	        this.match(JsonParser.T__2);
	        this.state = 24;
	        this.value();
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JsonParser.RULE_array);
	    var _la = 0; // Token type
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.match(JsonParser.T__3);
	            this.state = 27;
	            this.value();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===JsonParser.T__4) {
	                this.state = 28;
	                this.match(JsonParser.T__4);
	                this.state = 29;
	                this.value();
	                this.state = 34;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 35;
	            this.match(JsonParser.T__5);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.match(JsonParser.T__3);
	            this.state = 38;
	            this.match(JsonParser.T__5);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JsonParser.RULE_value);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JsonParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.match(JsonParser.STRING);
	            break;
	        case JsonParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.match(JsonParser.NUMBER);
	            break;
	        case JsonParser.T__0:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this.object();
	            break;
	        case JsonParser.T__3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 44;
	            this.array();
	            break;
	        case JsonParser.T__6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 45;
	            this.match(JsonParser.T__6);
	            break;
	        case JsonParser.T__7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 46;
	            this.match(JsonParser.T__7);
	            break;
	        case JsonParser.T__8:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 47;
	            this.match(JsonParser.T__8);
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

JsonParser.EOF = antlr4.Token.EOF;
JsonParser.T__0 = 1;
JsonParser.T__1 = 2;
JsonParser.T__2 = 3;
JsonParser.T__3 = 4;
JsonParser.T__4 = 5;
JsonParser.T__5 = 6;
JsonParser.T__6 = 7;
JsonParser.T__7 = 8;
JsonParser.T__8 = 9;
JsonParser.STRING = 10;
JsonParser.NUMBER = 11;

JsonParser.RULE_json = 0;
JsonParser.RULE_object = 1;
JsonParser.RULE_pair = 2;
JsonParser.RULE_array = 3;
JsonParser.RULE_value = 4;

class JsonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JsonParser.RULE_json;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArrContext extends JsonContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JsonVisitor ) {
	        return visitor.visitArr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JsonParser.ArrContext = ArrContext;

class ObjContext extends JsonContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JsonVisitor ) {
	        return visitor.visitObj(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JsonParser.ObjContext = ObjContext;

class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JsonParser.RULE_object;
    }

	pair() {
	    return this.getTypedRuleContext(PairContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JsonVisitor ) {
	        return visitor.visitObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JsonParser.RULE_pair;
    }

	STRING() {
	    return this.getToken(JsonParser.STRING, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JsonVisitor ) {
	        return visitor.visitPair(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JsonParser.RULE_array;
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

	accept(visitor) {
	    if ( visitor instanceof JsonVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = JsonParser.RULE_value;
    }

	STRING() {
	    return this.getToken(JsonParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(JsonParser.NUMBER, 0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JsonVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JsonParser.JsonContext = JsonContext; 
JsonParser.ObjectContext = ObjectContext; 
JsonParser.PairContext = PairContext; 
JsonParser.ArrayContext = ArrayContext; 
JsonParser.ValueContext = ValueContext; 
