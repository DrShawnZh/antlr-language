// Generated from ./ArrayInit.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0007\u001f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0006\u0005\u0015\n\u0005\r\u0005\u000e\u0005\u0016\u0003\u0006\u0006",
    "\u0006\u001a\n\u0006\r\u0006\u000e\u0006\u001b\u0003\u0006\u0003\u0006",
    "\u0002\u0002\u0007\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\u0003\u0002\u0004\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002 \u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0003\r\u0003\u0002",
    "\u0002\u0002\u0005\u000f\u0003\u0002\u0002\u0002\u0007\u0011\u0003\u0002",
    "\u0002\u0002\t\u0014\u0003\u0002\u0002\u0002\u000b\u0019\u0003\u0002",
    "\u0002\u0002\r\u000e\u0007}\u0002\u0002\u000e\u0004\u0003\u0002\u0002",
    "\u0002\u000f\u0010\u0007.\u0002\u0002\u0010\u0006\u0003\u0002\u0002",
    "\u0002\u0011\u0012\u0007\u007f\u0002\u0002\u0012\b\u0003\u0002\u0002",
    "\u0002\u0013\u0015\t\u0002\u0002\u0002\u0014\u0013\u0003\u0002\u0002",
    "\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002",
    "\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\n\u0003\u0002\u0002",
    "\u0002\u0018\u001a\t\u0003\u0002\u0002\u0019\u0018\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002",
    "\u0002\u001d\u001e\b\u0006\u0002\u0002\u001e\f\u0003\u0002\u0002\u0002",
    "\u0005\u0002\u0016\u001b\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ArrayInitLexer extends antlr4.Lexer {

    static grammarFileName = "ArrayInit.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'{'", "','", "'}'" ];
	static symbolicNames = [ null, null, null, null, "INT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "INT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

ArrayInitLexer.EOF = antlr4.Token.EOF;
ArrayInitLexer.T__0 = 1;
ArrayInitLexer.T__1 = 2;
ArrayInitLexer.T__2 = 3;
ArrayInitLexer.INT = 4;
ArrayInitLexer.WS = 5;



