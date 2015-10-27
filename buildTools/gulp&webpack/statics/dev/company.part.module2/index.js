/**
 * @module module2/index
 * @description 模块入口
 * @author kimhou create on 15/10/27 15:47
 */

require('./css/style.css');
require('./mod1.js');

var reactComponent = require('./jsx/jsxMain.jsx');
var commonComponent1 = require('../common/jsx/commonMod1.jsx');

var ejsTemp = require('./ejs/temp1.ejs');

module.exports = {
    init: function () {

    }
};