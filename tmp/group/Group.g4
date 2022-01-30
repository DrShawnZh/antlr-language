grammar Group;

@parser::members {
  this.col = col;
}

file: (row NL)+;

row
locals [int i=0]
  : ( STUFF
    {
      $i++;
      if ($i == this.col) {
        console.log($STUFF.text)
      };
    }
  )+
  ;

TAB: '\t' -> skip;
NL: '\r' ? '\n';
STUFF: ~[ \t\n\r]+;