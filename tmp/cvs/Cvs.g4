grammar Cvs;

file
locals [int i = 0]
  : hdr ( rows+=row[$hdr.text.split(",")] {$i++} )+
    {
      console.log($i + 'rows')
      for (let row of $rows) {
        console.log('row token interval' + row.getSourceInterval())
      }
    }
  ;

hdr: row[null] {console.log(`header: ${$text.trim()}`)};

row[String[] columns] returns [Map<String, String> values]
locals [int col=0]
@init {
  $values = new Map();
}
@after {
  if ($values != null && $values.size > 0) {
    let str = "";
    for (let key of $values.keys()) {
      str += `${key} = ${$values.get(key)};`
    }
    console.log(`values: ${str}`);
  }
}
  : field 
  {
    if ($columns != null) {
      $values.set($columns[$col++].trim(), $field.text.trim())
    }
  }
  (
    ',' field
    {
       if ($columns != null) {
        $values.set($columns[$col++].trim(), $field.text.trim())
      }
    }
  )* '\r'? '\n'
  ;

field: TEXT
  | STRING
  |
  ;

TEXT: ~[,\n\r"]+;
STRING: '"' ('""'|~'"') '"';