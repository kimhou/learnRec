# gulp + webpack 开发环境搭建DEMO

### 环境说明
此开发环境使用gulp + webpack-stream进行打包任务，打包编译工具使用babel，无论你是否使用jsx, 是否使用ejs模板都可以尝试使用，至少会让你的代码拆分更合理，至少可以试试ES6的新特性，step by step两步搞定。

目前已经支持

1. jsx, ejs, css编译（其他模板只需添加webpack的loader配置即可支持）

2. js ES6语法转ES5

3. js文件打包为VM模块