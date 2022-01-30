grammar ArrayInit;

init: '{' value (',' value)* '}';

value: init
  | INT
  ;

INT: [0-9]+;
// 跳过换行，空格
WS: [ \t\n\r]+ -> skip;