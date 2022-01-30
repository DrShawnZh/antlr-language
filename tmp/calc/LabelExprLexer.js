// Generated from ./LabelExpr.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\r=\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0006\u0005!\n\u0005\r\u0005\u000e\u0005\"\u0003",
    "\u0006\u0006\u0006&\n\u0006\r\u0006\u000e\u0006\'\u0003\u0007\u0005",
    "\u0007+\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0006\b0\n\b\r\b\u000e",
    "\b1\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0002\u0002\r\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0003\u0002\u0005\u0004\u0002C\\c|\u0003\u00022;\u0004\u0002\u000b",
    "\u000b\"\"\u0002@\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0003\u0019\u0003",
    "\u0002\u0002\u0002\u0005\u001b\u0003\u0002\u0002\u0002\u0007\u001d\u0003",
    "\u0002\u0002\u0002\t \u0003\u0002\u0002\u0002\u000b%\u0003\u0002\u0002",
    "\u0002\r*\u0003\u0002\u0002\u0002\u000f/\u0003\u0002\u0002\u0002\u0011",
    "5\u0003\u0002\u0002\u0002\u00137\u0003\u0002\u0002\u0002\u00159\u0003",
    "\u0002\u0002\u0002\u0017;\u0003\u0002\u0002\u0002\u0019\u001a\u0007",
    "?\u0002\u0002\u001a\u0004\u0003\u0002\u0002\u0002\u001b\u001c\u0007",
    "*\u0002\u0002\u001c\u0006\u0003\u0002\u0002\u0002\u001d\u001e\u0007",
    "+\u0002\u0002\u001e\b\u0003\u0002\u0002\u0002\u001f!\t\u0002\u0002\u0002",
    " \u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\" \u0003",
    "\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#\n\u0003\u0002\u0002\u0002",
    "$&\t\u0003\u0002\u0002%$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002",
    "\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(\f\u0003",
    "\u0002\u0002\u0002)+\u0007\u000f\u0002\u0002*)\u0003\u0002\u0002\u0002",
    "*+\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0007\f\u0002",
    "\u0002-\u000e\u0003\u0002\u0002\u0002.0\t\u0004\u0002\u0002/.\u0003",
    "\u0002\u0002\u000201\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000234\b\b\u0002\u0002",
    "4\u0010\u0003\u0002\u0002\u000256\u0007,\u0002\u00026\u0012\u0003\u0002",
    "\u0002\u000278\u00071\u0002\u00028\u0014\u0003\u0002\u0002\u00029:\u0007",
    "-\u0002\u0002:\u0016\u0003\u0002\u0002\u0002;<\u0007/\u0002\u0002<\u0018",
    "\u0003\u0002\u0002\u0002\u0007\u0002\"\'*1\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LabelExprLexer extends antlr4.Lexer {

    static grammarFileName = "LabelExpr.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "'('", "')'", null, null, null, null, 
                         "'*'", "'/'", "'+'", "'-'" ];
	static symbolicNames = [ null, null, null, null, "ID", "INT", "NEWLINE", 
                          "WS", "MUL", "DIV", "ADD", "SUB" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "ID", "INT", "NEWLINE", "WS", 
                      "MUL", "DIV", "ADD", "SUB" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

LabelExprLexer.EOF = antlr4.Token.EOF;
LabelExprLexer.T__0 = 1;
LabelExprLexer.T__1 = 2;
LabelExprLexer.T__2 = 3;
LabelExprLexer.ID = 4;
LabelExprLexer.INT = 5;
LabelExprLexer.NEWLINE = 6;
LabelExprLexer.WS = 7;
LabelExprLexer.MUL = 8;
LabelExprLexer.DIV = 9;
LabelExprLexer.ADD = 10;
LabelExprLexer.SUB = 11;



