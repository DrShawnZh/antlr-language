grammar IP;

file: row+;
row: ip STRING INT NL;
ip: INT '.' INT '.' INT '.' INT;

STRING: '"' .*? '"';
NL: '\n' -> skip;
INT: [0-9]+;
WS: ' ' -> skip;