// Generated from ./IP.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0007%\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0007\u0003\u0012\n\u0003\f\u0003",
    "\u000e\u0003\u0015\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0006\u0005\u001e\n\u0005",
    "\r\u0005\u000e\u0005\u001f\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0013\u0002\u0007\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\u0003\u0002\u0003\u0003\u00022;\u0002&\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0003\r\u0003\u0002\u0002\u0002\u0005\u000f",
    "\u0003\u0002\u0002\u0002\u0007\u0018\u0003\u0002\u0002\u0002\t\u001d",
    "\u0003\u0002\u0002\u0002\u000b!\u0003\u0002\u0002\u0002\r\u000e\u0007",
    "0\u0002\u0002\u000e\u0004\u0003\u0002\u0002\u0002\u000f\u0013\u0007",
    "$\u0002\u0002\u0010\u0012\u000b\u0002\u0002\u0002\u0011\u0010\u0003",
    "\u0002\u0002\u0002\u0012\u0015\u0003\u0002\u0002\u0002\u0013\u0014\u0003",
    "\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0014\u0016\u0003",
    "\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0016\u0017\u0007",
    "$\u0002\u0002\u0017\u0006\u0003\u0002\u0002\u0002\u0018\u0019\u0007",
    "\f\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001b\b\u0004",
    "\u0002\u0002\u001b\b\u0003\u0002\u0002\u0002\u001c\u001e\t\u0002\u0002",
    "\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 \n\u0003\u0002\u0002\u0002!\"\u0007\"\u0002\u0002\"#\u0003\u0002",
    "\u0002\u0002#$\b\u0006\u0002\u0002$\f\u0003\u0002\u0002\u0002\u0005",
    "\u0002\u0013\u001f\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class IPLexer extends antlr4.Lexer {

    static grammarFileName = "IP.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'.'", null, "'\n'", null, "' '" ];
	static symbolicNames = [ null, null, "STRING", "NL", "INT", "WS" ];
	static ruleNames = [ "T__0", "STRING", "NL", "INT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

IPLexer.EOF = antlr4.Token.EOF;
IPLexer.T__0 = 1;
IPLexer.STRING = 2;
IPLexer.NL = 3;
IPLexer.INT = 4;
IPLexer.WS = 5;



