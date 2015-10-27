## gulp + webpack 开发环境搭建DEMO

#### 环境说明
此开发环境使用gulp + webpack-stream进行打包任务，打包编译工具使用babel，无论你是否使用jsx, 是否使用ejs模板都可以尝试使用，至少会让你的代码拆分更合理，至少可以试试ES6的新特性，step by step两步搞定。

目前已经支持

1. jsx, ejs, css编译（其他模板只需添加webpack的loader配置即可支持）

2. js ES6语法转ES5

3. js文件打包为VM模块

## Step 1. 环境依赖, 安装npm依赖包
#### 安装最新版本node+npm
请参见官网nodejs.org

#### 安装全局Gulp
```
npm install --global gulp
```
#### 初始化npm环境, 生成package.js
进入项目目录执行
```
npm  init
```
 填写提示输入的字段【随意填写无防】

#### 安装gulp+webpack-stream依赖：
```
npm install --save-dev gulp  webpack-stream through2 fs
```
#### 安装webpack loader依赖：
```
npm install --save-dev babel-loader ejs-tmpl-loader css-loader style-loader
```
## Step 2. 编写gulpfile.js配置文件
新建gulpfile.js并编写gulp任务，这里项目可以复用demo的gulpfile.js文件，只需要修改配置部分：
```
/******************根据项目实际情况修改下以下这两项, 其他可以复用******************/
//配置目录和模块规则
var devFolder = './statics/dev/',
    //这个为模块目录规则, 用此规则找到各个模块的入口文件新建webpack任务
    moduleReg = /(company\.part\..*).js/i;

/************************************end***********************************/

```
项目中module1, module2 ....目录下面需要一入口文件index.js,

内部模块的js，jsx需要使用commonjs规范编写， 内部之间的依赖使用require，由于require关键字冲突，引用vm模块时, 需要使用window.require('***')来hack（也可以用其他字符，只需要在buildVMModule替换时做相应修改即可）。

## Finish 
只需要在项目目录运行：
```
gulp
```
 如果编译成功会马上输出合并结果，在相关的文件有变化时也会自动编译

成功输出：
```
[16:50:16] Version: webpack 1.12.2
                  Asset     Size  Chunks             Chunk Names
company.part.module1.js  15.4 kB       0  [emitted]  company.part.module1
company.part.module2.js  5.83 kB       1  [emitted]  company.part.module2
                 2.2.js  1.58 kB       2  [emitted]  

```


此时查看输出目录已经生成了对应的文件：

company.part.module1.js:

错误输出
如果编译出现错误也能方便的看到错误堆栈，找到错误点：
```
ERROR in ./statics/dev/company.part.module2/index.js
Module not found: Error: Cannot resolve 'file' or 'directory' ../jsx/page.jsx in /Users/tencent/myGithub/learnRec/buildTools/gulp&webpack/statics/dev/company.part.module2
 @ ./statics/dev/company.part.module2/index.js 14:11-37
```


至此gulp + webpack的开发环境搭建完成。