// Generated from ./Err.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0005\u001b\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0006\u0004\u0018\n",
    "\u0004\r\u0004\u000e\u0004\u0019\u0002\u0002\u0005\u0003\u0003\u0005",
    "\u0004\u0007\u0005\u0003\u0002\u0003\u0004\u0002C\\c|\u0002\u001b\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0003\t\u0003\u0002\u0002\u0002\u0005",
    "\u000f\u0003\u0002\u0002\u0002\u0007\u0017\u0003\u0002\u0002\u0002\t",
    "\n\u0007e\u0002\u0002\n\u000b\u0007n\u0002\u0002\u000b\f\u0007c\u0002",
    "\u0002\f\r\u0007u\u0002\u0002\r\u000e\u0007u\u0002\u0002\u000e\u0004",
    "\u0003\u0002\u0002\u0002\u000f\u0010\u0007o\u0002\u0002\u0010\u0011",
    "\u0007g\u0002\u0002\u0011\u0012\u0007o\u0002\u0002\u0012\u0013\u0007",
    "d\u0002\u0002\u0013\u0014\u0007g\u0002\u0002\u0014\u0015\u0007t\u0002",
    "\u0002\u0015\u0006\u0003\u0002\u0002\u0002\u0016\u0018\t\u0002\u0002",
    "\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002",
    "\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002",
    "\u0002\u001a\b\u0003\u0002\u0002\u0002\u0004\u0002\u0019\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ErrLexer extends antlr4.Lexer {

    static grammarFileName = "Err.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'class'", "'member'" ];
	static symbolicNames = [ null, null, null, "ID" ];
	static ruleNames = [ "T__0", "T__1", "ID" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

ErrLexer.EOF = antlr4.Token.EOF;
ErrLexer.T__0 = 1;
ErrLexer.T__1 = 2;
ErrLexer.ID = 3;



