// Generated from ./Group.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0005\u0017\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0005\u0003\u000f\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0006\u0004\u0014\n\u0004\r\u0004\u000e\u0004\u0015\u0002\u0002",
    "\u0005\u0003\u0003\u0005\u0004\u0007\u0005\u0003\u0002\u0003\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0002\u0018\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0003\t\u0003\u0002\u0002\u0002\u0005\u000e\u0003\u0002\u0002\u0002",
    "\u0007\u0013\u0003\u0002\u0002\u0002\t\n\u0007\u000b\u0002\u0002\n\u000b",
    "\u0003\u0002\u0002\u0002\u000b\f\b\u0002\u0002\u0002\f\u0004\u0003\u0002",
    "\u0002\u0002\r\u000f\u0007\u000f\u0002\u0002\u000e\r\u0003\u0002\u0002",
    "\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002",
    "\u0002\u0010\u0011\u0007\f\u0002\u0002\u0011\u0006\u0003\u0002\u0002",
    "\u0002\u0012\u0014\n\u0002\u0002\u0002\u0013\u0012\u0003\u0002\u0002",
    "\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002",
    "\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\b\u0003\u0002\u0002",
    "\u0002\u0005\u0002\u000e\u0015\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class GroupLexer extends antlr4.Lexer {

    static grammarFileName = "Group.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\t'" ];
	static symbolicNames = [ null, "TAB", "NL", "STUFF" ];
	static ruleNames = [ "TAB", "NL", "STUFF" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

GroupLexer.EOF = antlr4.Token.EOF;
GroupLexer.TAB = 1;
GroupLexer.NL = 2;
GroupLexer.STUFF = 3;



