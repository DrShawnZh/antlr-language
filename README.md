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
  

## 语法

