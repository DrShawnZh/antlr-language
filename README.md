# antlr-language

> 确保电脑中已经有java运行环境

## mac下antlr环境安装

1. `/usr/local/lib`目录下下载[antlr](http://www.antlr.org/download/antlr-4.0-complete.jar)

  > 也可以直接执行`curl -o http://www.antlr.org/download/antlr-4.0-complete.jar`

2. 更改电脑环境变量，更改.bash_profile文件，在末尾添加以下代码

  ```text
  export CLASSPATH=".:/usr/local/lib/antlr-4.9-complete.jar:$CLASSPATH"
  alias antlr4='java -jar /usr/local/lib/antlr-4.9-complete.jar'
  alias grun='java org.antlr.v4.gui.TestRig'
  ```

4. 执行`source .bash_profile`，应用环境变量

3. 执行`antlr4 -version`看是否配置好
  

## 流程

1. 编写g4语法文件

2. 执行`antlr4 -Dlanguage=JavaScript *.g4`命令，生成对应的js文件

	> `-Dlanguage` 配置项可以生成对应语言的文件  
	>
	> 文件注解  
	> Parser.js 包含一个语法分析器类的定义，专门识别语法  
	> Lexer.js 自动识别出语法中的文法规则和词法规则  
	> .tokens 给每个定义的词法符号制定一个数字形式的类型，然后将它们对应关系存储于该文件中  
	> Listener.js 遍历语法分析树，遍历器能触发一系列事件，通知监听器对象  
  
## Tips

1. `walker`调用

	```
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
	```
	
2. 进行语法分析的常用流程

	```
	1. 创建输入流
	const input = new InputStream(str);
	2. 将词法分析器指定给该流
	const lexer = new Lexer(input);
	3. 创建词法符号流并将其指定给词法分析器
	const tokens = new CommonTokenStream(lexer)
	4. 创建语法分析器并将其指定给词法符号流
	const parser = new Parser(tokens)
	```
3. 提高语法分析的速度

	```
	parser.getInterpreter().setSLL(true) // 尝试简单快捷的sll
	
	try {
		// 执行解析
	} catch(e) {
		parser.getInterpreter().setSLL(false) // 尝试全功能的LL
		// 重新执行解析
	}
	```


## 语法

1. 语法文件中定义返回值

	```
	grammar Calc;
	
	stat: expr NEWLINE              # printExpr
	  | ID '=' expr NEWLINE         # assign
	  | NEWLINE                     # blank
	  ;
	
	// expr为计算出的返回值
	expr returns [int v]
		: a = expr op=('*' | '/') b = expr
		{ $v = eval(a, b, op) } // 匹配当前规则时，计算expr的值，通过$expr.v使用
		# MulDiv
	  	| expr op=('+' | '-') expr    # AddSub
	  	| INT                         # int
	  	| ID                          # id
	  	| '(' expr ')'                # parens
	  	;
	
	```

2. 语法文件中定义局部变量

	```
	grammar Group;
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
	```

3. 条件语句，识别歧义性文本

	> 出于效率考虑，最好将他们放置在规则末尾；语义判定必须出现在词法动作之前

	```
	@parser::members {
		istype() {return true / false}
	}
	decl: ID ID
		| {isType()}? ID '(' ID ')' //  当isType()为true才会有这个分支
		;
		
	
	```
	
4. 非贪婪匹配 `.*?` 一直向后扫描，直至遇到后续匹配规则为止
	
	> 对于有效的输入序列，匹配使语法分析过程成功的最短词法符号序列

	```
	comment: '<!--' .*? '-->' -> skip;
	```
	
5. 常见的转义序列

	符号|语义
	---|---
	\n|换行符
	\r|回车符
	\t|制表符
	\b|退格符
	\f|换页符


## 错误处理

1. 在语法文件(*.g4)中增加打印

	```
	grammar Json;
	
	file: 'class' ID 'members'
			{console.log($ID.text)}
			;
			
	ID: [a-zA-Z]+;
	```

2. 应急模式

	> 当面对非法输入，当前规则无法进行下去，语法分析器会向后查找词法符号，知道它认为自己完成同步，就返回原先被调用的规则
