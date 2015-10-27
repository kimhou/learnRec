/**
 * @description gulp任务
 */

//加载依赖
var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var through = require('through2');
var fs = require('fs');

/******************根据项目实际情况修改下以下这两项, 其他可以复用******************/
//配置目录和模块规则
var devFolder = './statics/dev/',
    //这个为模块目录规则, 用此规则找到各个模块的入口文件新建webpack任务
    moduleReg = /(company\.part\..*).js/i;//egs - cdb:   /(qcloud\.cdb\..*).js/i

/************************************end***********************************/


/**
 * webpack任务
 */
gulp.task('default', function () {
    webpackStream({
        entry: getEntrys(devFolder, moduleReg),//获取入口文件, eg: [{moduel1: "./statics/dev/module1/index.js"}, ...]
        output: {
            filename: '[name].js'//输出文件名
        },
        module: {
            //loaders为webpack自动适配不同文件的编译方式, test为匹配规则, loader为npm模块
            loaders: [
                {test: /\.jsx?$/, loader: 'babel'},
                {test: /\.ejs$/, loader: 'ejs-tmpl'},
                {test: /\.css$/, loader: 'style/useable!css'}
            ]
        },
        watch: true//文件变化自动合并
    })
        .pipe(makeVMModule())//将合并后的代码打包成VM格式
        .pipe(gulp.dest(devFolder));//文件输出目录
});

/**
 * 获取入口文件
 * @param root 模块所在根目录
 * @param moduleReg 模块匹配规则
 */
function getEntrys(root, moduleReg) {
    var root = root || './statics/dev/',
        entrys = {};
    var files = fs.readdirSync(root);
    files.forEach(function (moduleName) {
        var state = fs.lstatSync(root + moduleName);
        if (state.isDirectory() && moduleReg.test(moduleName + '.js')) {
            entrys[moduleName] = root + moduleName + '/index.js';
        }
    });
    return entrys;
}

/**
 * 打包VM模块
 * 1. 替换window.require为require
 * 2. 添加define模块代码
 */
function makeVMModule() {
    return through.obj(function (file, encoding, cb) {
        try {
            var name = file.path.match(moduleReg)[1];
            name = (name && name.length ? '"' + name + '", ' : '');
            var moduleContents = file.contents.toString()
                .replace(/[^.]require\(/g, '__require(')
                .replace(/(window\.)*window\[('|")require('|")\]/g, 'require')
                .replace(/(window\.)+require/g, 'require')
                .replace(/__require\(/g, 'window["require"](');

            file.contents = new Buffer([
                '/**',
                ' * compiled by gulp+webpack',
                ' * @author kimhou@tencent.com',
                ' */',
                '',
                'define(' + name + 'function(require, exports, module) { ',
                '   var MOD = ' + moduleContents + '; ',
                '   return MOD;',
                '});'
            ].join('\n'), 'utf-8');
            this.push(file);
            cb();
        } catch (e) {
            console.log(e);
        }
    });
}