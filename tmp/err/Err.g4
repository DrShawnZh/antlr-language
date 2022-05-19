grammar Err;

file: 'class' ID 'member'
      {console.log($ID.text)}
      ;

ID: [a-zA-Z]+;