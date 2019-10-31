module.exports = function(window, document) {const App = function(options) {window.appOptions = options};var navigator = window.navigator;var HTMLElement = window.HTMLElement;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var location = window.location;window["createApp"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([10,0,3]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(1);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/data/goods.js
var allGoods = [{
  goodsId: 1000,
  outerId: 6773193120,
  hao99: 1,
  goodsName: '袜子男女短筒袜秋季个性时尚百搭学院风低帮浅口船袜',
  source: '拼多多',
  linePrice: 48,
  discountsPrice: 16.8,
  couponMoney: 10,
  couponPercent: 0.6,
  commissionMoney: 1.5,
  commissionPercent: 0.09,
  realityMoney: '5.30',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=6773193120',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001001.jpg'
}, {
  goodsId: 1001,
  outerId: 36579725754,
  hao99: 2,
  goodsName: '早餐杯陶瓷杯带盖勺马克杯子创意牛奶杯情侣简约水杯办公室咖啡杯',
  source: '拼多多',
  linePrice: 270,
  discountsPrice: 30.9,
  couponMoney: 20,
  couponPercent: 0.65,
  commissionMoney: 2.18,
  commissionPercent: 0.07,
  realityMoney: '8.72',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=36579725754',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001002.jpg'
}, {
  goodsId: 1002,
  outerId: 1608553378,
  hao99: 3,
  goodsName: '珂润婴儿湿巾带盖80抽*6包大包宝宝新生儿童成人人手口屁屁湿纸巾',
  source: '拼多多',
  linePrice: 69,
  discountsPrice: 16.8,
  couponMoney: 6,
  couponPercent: 0.36,
  commissionMoney: 2.16,
  commissionPercent: 0.13,
  realityMoney: '8.64',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=1608553378',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001003.png'
}, {
  goodsId: 1003,
  outerId: 2673614309,
  hao99: 4,
  goodsName: '冬季情侣室内居家居儿童棉拖鞋女士加厚底保暖毛毛鞋男士棉鞋冬天',
  source: '拼多多',
  linePrice: 68,
  discountsPrice: 8.9,
  couponMoney: 1,
  couponPercent: 0.11,
  commissionMoney: 1.19,
  commissionPercent: 0.13,
  realityMoney: '6.71',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=2673614309',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001004.jpg'
}, {
  goodsId: 1004,
  outerId: 4586431667,
  hao99: 5,
  goodsName: '透明化妆包小号便携随身防水洗漱包韩版大容量手拿包化妆品收纳袋',
  source: '拼多多',
  linePrice: 19,
  discountsPrice: 8.8,
  couponMoney: 1,
  couponPercent: 0.11,
  commissionMoney: 0.78,
  commissionPercent: 0.09,
  realityMoney: '7.02',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=4586431667',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001005.jpg'
}, {
  goodsId: 1005,
  outerId: 8585860694,
  hao99: 6,
  goodsName: 'vivonex手机壳nex后置指纹液软态硅胶前置nexa超薄磨砂全包保护套',
  source: '拼多多',
  linePrice: 15,
  discountsPrice: 8.64,
  couponMoney: 1,
  couponPercent: 0.12,
  commissionMoney: 1.53,
  commissionPercent: 0.18,
  realityMoney: '6.11',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=8585860694',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001006.jpg'
}, {
  goodsId: 1006,
  outerId: 20690829770,
  maybeLike: 1,
  goodsName: '每日坚果大礼包600克_30包独立包装休闲零食干果混合装',
  source: '拼多多',
  linePrice: 88,
  discountsPrice: 35.9,
  couponMoney: 20,
  couponPercent: 0.56,
  commissionMoney: 2.45,
  commissionPercent: 0.07,
  realityMoney: '13.45',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=20690829770',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001007.jpg'
}, {
  goodsId: 1007,
  outerId: 5832492342,
  maybeLike: 16,
  goodsName: '阿宽红油面皮4袋装干拌面擀面皮凉皮宿舍即食网红方便面超辣面',
  source: '拼多多',
  linePrice: 33.9,
  discountsPrice: 14.9,
  couponMoney: 1,
  couponPercent: 0.07,
  commissionMoney: 1.39,
  commissionPercent: 0.09,
  realityMoney: '12.51',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=5832492342',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001008.jpg'
}, {
  goodsId: 1008,
  outerId: 1680910240,
  maybeLike: 9,
  goodsName: '广西正宗土红糖块大姨妈产妇老红糖甘蔗手工黑糖暖宫驱寒250g',
  source: '拼多多',
  linePrice: 99,
  discountsPrice: 7.9,
  couponMoney: 3,
  couponPercent: 0.38,
  commissionMoney: 0.49,
  commissionPercent: 0.06,
  realityMoney: '4.41',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=1680910240',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001009.jpg'
}, {
  goodsId: 1009,
  outerId: 30269078670,
  maybeLike: 25,
  goodsName: '好兄弟山药薄片脆片33g一整箱网红休闲小零食小包装零食混合薯片',
  source: '拼多多',
  linePrice: 21.5,
  discountsPrice: 7.2,
  couponMoney: 2,
  couponPercent: 0.28,
  commissionMoney: 2.34,
  commissionPercent: 0.32,
  realityMoney: '2.86',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=30269078670',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001010.jpg'
}, {
  goodsId: 1010,
  outerId: 22121634953,
  maybeLike: 2,
  goodsName: '大容量20000毫安充电宝快充vivo苹果3OPPO手机通用万便携移动电源',
  source: '拼多多',
  linePrice: 99,
  discountsPrice: 59.9,
  couponMoney: 35,
  couponPercent: 0.58,
  commissionMoney: 4.98,
  commissionPercent: 0.08,
  realityMoney: '19.92',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=22121634953',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001011.jpg'
}, {
  goodsId: 1011,
  outerId: 45835144125,
  maybeLike: 8,
  goodsName: 'PS4 索尼PS4游戏机战神4 slimPRO免费游戏 PS4破解版主机 VR体感',
  source: '拼多多',
  linePrice: 4300,
  discountsPrice: 1200,
  couponMoney: 10,
  couponPercent: 0.01,
  commissionMoney: 35.7,
  commissionPercent: 0.03,
  realityMoney: '1154.30',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=45835144125',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001012.jpg'
}, {
  goodsId: 1012,
  outerId: 24410798796,
  maybeLike: 24,
  goodsName: '华硕笔记本电脑正品学生游戏本轻薄便携i5四核F441四核i7独显',
  source: '拼多多',
  linePrice: 6060,
  discountsPrice: 3450,
  couponMoney: 10,
  couponPercent: 0,
  commissionMoney: 172,
  commissionPercent: 0.05,
  realityMoney: '3268.00',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=24410798796',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001013.jpg'
}, {
  goodsId: 1013,
  outerId: 18515891785,
  maybeLike: 17,
  goodsName: '华为新款畅享9s_4_128G高配版全网通4G_水滴屏拍照智能游戏手机',
  source: '拼多多',
  linePrice: 1899,
  discountsPrice: 1299,
  couponMoney: 6,
  couponPercent: 0,
  commissionMoney: 12.93,
  commissionPercent: 0.01,
  realityMoney: '1280.07',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=18515891785',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001014.jpg'
}, {
  goodsId: 1014,
  outerId: 41873775,
  maybeLike: 10,
  goodsName: '德国小钢炮无线蓝牙金属音箱手机迷你便携大音量小音响插卡低音炮',
  source: '拼多多',
  linePrice: 199,
  discountsPrice: 29.1,
  couponMoney: 2,
  couponPercent: 0.07,
  commissionMoney: 0.27,
  commissionPercent: 0.01,
  realityMoney: '26.83',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=41873775',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001015.jpg'
}, {
  goodsId: 1015,
  outerId: 5305767194,
  maybeLike: 15,
  goodsName: '【官方旗舰店】Missha谜尚韩国大红bb霜裸妆遮瑕防晒保湿控油美白',
  source: '拼多多',
  linePrice: 168,
  discountsPrice: 69,
  couponMoney: 10,
  couponPercent: 0.14,
  commissionMoney: 11.8,
  commissionPercent: 0.17,
  realityMoney: '47.20',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=5305767194',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001016.jpg'
}, {
  goodsId: 1016,
  outerId: 4792710708,
  maybeLike: 18,
  goodsName: '瓷肌补水保湿面膜控油黑面膜深层洁净亮肤海藻面膜',
  source: '拼多多',
  linePrice: 69.9,
  discountsPrice: 19.9,
  couponMoney: 6,
  couponPercent: 0.3,
  commissionMoney: 1.39,
  commissionPercent: 0.07,
  realityMoney: '12.51',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=4792710708',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001017.jpg'
}, {
  goodsId: 1191,
  subject: '重阳送好礼',
  subjectToDetail: true,
  goodsName: '4味可选 日本制造 天然草本睡眠足贴',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 69,
  discountsPrice: 69,
  couponMoney: 15,
  couponPercent: 0.22,
  commissionMoney: 0.69,
  commissionPercent: 0.01,
  realityMoney: '53.31',
  url: 'http://you.163.com/item/detail?id=1458000&_stat_subject=17922',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001192.jpg'
}, {
  goodsId: 1192,
  subject: '重阳送好礼',
  subjectToDetail: true,
  goodsName: '空气净化器 过滤网',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 169,
  discountsPrice: 169,
  couponMoney: 15,
  couponPercent: 0.09,
  commissionMoney: 1.68,
  commissionPercent: 0.01,
  realityMoney: '152.32',
  url: 'http://you.163.com/item/detail?id=1156045&_stat_subject=17922',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001193.jpg'
}, {
  goodsId: 1193,
  subject: '秋冬换季必备',
  categoryName: '服饰鞋包',
  goodsName: '2019新款风衣女中长款外套收腰显瘦过膝大衣韩版修身秋冬大码女装',
  brandName: '无',
  source: '拼多多',
  linePrice: 219,
  discountsPrice: 108.5,
  couponMoney: 1,
  couponPercent: 0,
  commissionMoney: 16.13,
  commissionPercent: 0.15,
  realityMoney: '91.37',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=33788970586',
  categoryId: 1006,
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001194.jpg'
}, {
  goodsId: 1194,
  subject: '秋冬换季必备',
  categoryName: '服饰鞋包',
  goodsName: '2019秋冬新款仿皮草外套女短款狐狸毛大衣长毛毛保暖韩版显瘦女装',
  brandName: '无',
  source: '拼多多',
  linePrice: 482.8,
  discountsPrice: 165.8,
  couponMoney: 10,
  couponPercent: 0.06,
  commissionMoney: 32.72,
  commissionPercent: 0.2,
  realityMoney: '123.08',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=47034698451',
  categoryId: 1006,
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001195.jpg'
}, {
  goodsId: 1195,
  subject: '秋冬换季必备',
  categoryName: '服饰鞋包',
  goodsName: '小西装套装女2019新款秋冬名媛气质ol职业装女装时尚酒店工作服',
  brandName: '无',
  source: '拼多多',
  linePrice: 3288,
  discountsPrice: 295,
  couponMoney: 7,
  couponPercent: 0.02,
  commissionMoney: 57.56,
  commissionPercent: 0.2,
  realityMoney: '23.44',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=37258576566',
  categoryId: 1006,
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001196.jpg'
}, {
  goodsId: 1196,
  subject: '秋冬换季必备',
  categoryName: '服饰鞋包',
  goodsName: '2019秋冬新款毛呢外套时尚女装中长款韩版宽松学院风呢子大衣拼色',
  brandName: '无',
  source: '拼多多',
  linePrice: 385,
  discountsPrice: 215,
  couponMoney: 10,
  couponPercent: 0.05,
  commissionMoney: 12.3,
  commissionPercent: 0.06,
  realityMoney: '192.70',
  url: 'https://mobile.yangkeduo.com/goods2.html?goods_id=47434375849',
  categoryId: 1006,
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001197.jpg'
}, {
  goodsId: 1197,
  subject: '50元幸福好物',
  goodsName: '美国制造 除甲醛空气净化剂227g',
  recommend: '在关国广泛应用于商业场所的空气净化剂，通过天然蓝色凝胶吸附苯、分解甲醛，无毒安全，保护人们的健康。',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 45,
  discountsPrice: 45,
  couponMoney: 15,
  couponPercent: 0.33,
  commissionMoney: 0.45,
  commissionPercent: 0.01,
  realityMoney: '29.55',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001198.png'
}, {
  goodsId: 1198,
  subject: '50元幸福好物',
  goodsName: '6包/提 谷风一木3层软抽面巾纸',
  recommend: '不添加炭光剂和增白剂的超安心纸巾，严选还做了独特的谷风一木和风手绘设计，人物和场景逗趣又有腔调，摆在家里艺术感十足。',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 16.9,
  discountsPrice: 16,
  couponMoney: 2,
  couponPercent: 0.13,
  commissionMoney: 0.16,
  commissionPercent: 0.01,
  realityMoney: '13.84',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001199.png'
}, {
  goodsId: 1199,
  subject: '50元幸福好物',
  goodsName: '3kg/1kg 强力去污酵素洗衣液',
  recommend: '里面的4种酵素成分，会分解各种污渍，把衣服洗得干干净净。由于洗得足够干净，就算晾在室内阴干，也不会有霉味，特别适合雨...',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 49.9,
  discountsPrice: 47.5,
  couponMoney: 2,
  couponPercent: 0.04,
  commissionMoney: 0.5,
  commissionPercent: 0.01,
  realityMoney: '45.00',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001200.png'
}, {
  goodsId: 1200,
  subject: '50元幸福好物',
  goodsName: '男/女 舒弹按摩家居拖鞋',
  recommend: '这是一双自带按摩功能的拖鞋，鞋面的突起小颗粒，让你的每一次行走都是在减轻足部疲劳。让在家的时间彻彻底底放松。    ',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 19.9,
  discountsPrice: 18.9,
  couponMoney: 3,
  couponPercent: 0.16,
  commissionMoney: 0.2,
  commissionPercent: 0.01,
  realityMoney: '15.70',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001201.png'
}, {
  goodsId: 1201,
  subject: '50元幸福好物',
  goodsName: '九制黑芝麻丸 100克',
  recommend: '古法九蒸九制黑芝麻丸，是胡庆余堂的百年口碑产品，女明星都在吃！小零嘴的价格，就能买到四季滋补品。',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 39,
  discountsPrice: 39,
  couponMoney: 15,
  couponPercent: 0.38,
  commissionMoney: 0.39,
  commissionPercent: 0.01,
  realityMoney: '13.61',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001202.png'
}, {
  goodsId: 1202,
  subject: '50元幸福好物',
  goodsName: '大丈夫冻干牛肉面',
  recommend: '和普通的泡面不同，它既不是油炸的，也是真的有肉的！每一口吃下去都是幸福感！夜里饿了来一碗，真的超满足！',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 28.5,
  discountsPrice: 28.5,
  couponMoney: 0,
  couponPercent: 0,
  commissionMoney: 0.29,
  commissionPercent: 0.01,
  realityMoney: '28.21',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001203.jpg'
}, {
  goodsId: 1203,
  subject: '50元幸福好物',
  goodsName: '红豆薏米丸 100克',
  recommend: '我们找的这家厂子，专业生产酸梅汤40余年，味道正宗，与市面上工业化、流水线的口感完全不一样。',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 39,
  discountsPrice: 39,
  couponMoney: 5,
  couponPercent: 0.13,
  commissionMoney: 0.39,
  commissionPercent: 0.01,
  realityMoney: '33.61',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001204.png'
}, {
  goodsId: 1204,
  subject: '50元幸福好物',
  goodsName: '酸梅汤 350毫升*9瓶',
  recommend: '我们找的这家厂子，专业生产酸梅汤40余年，味道正宗，与市面上工业化、流水线的口感完全不一样。',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 38,
  discountsPrice: 36.1,
  couponMoney: 2,
  couponPercent: 0.06,
  commissionMoney: 0.37,
  commissionPercent: 0.01,
  realityMoney: '33.73',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001205.png'
}, {
  goodsId: 1205,
  subject: '50元幸福好物',
  goodsName: '网易智造壁挂式感应小夜灯',
  recommend: '红外人体感应的小夜灯，人来即亮，人走即灭。可以走廊装一排，让夜里没有黑暗时刻，也可以拿一个在手里一路亮堂随行。',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 49,
  discountsPrice: 46.5,
  couponMoney: 15,
  couponPercent: 0.32,
  commissionMoney: 0.45,
  commissionPercent: 0.01,
  realityMoney: '41.05',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001206.png'
}, {
  goodsId: 1206,
  subject: '50元幸福好物',
  goodsName: '玩味·Tritan多用变身杯',
  recommend: '一个杯子，两种开瓶方式，四种变形方式。大人小孩都能找到夏天喝水的独有乐趣。',
  brandName: '网易严选',
  source: '网易严选',
  linePrice: 49,
  discountsPrice: 46.6,
  couponMoney: 2,
  couponPercent: 0.04,
  commissionMoney: 0.49,
  commissionPercent: 0.01,
  realityMoney: '44.11',
  imgUrl: 'https://cdn.retail.tencent.com/demo-mao/1010/goods/1015_10001207.png'
}];
// EXTERNAL MODULE: ./src/components/goodsList/index.css
var goodsList = __webpack_require__(9);

// CONCATENATED MODULE: ./src/components/goodsList/index.js



/* harmony default export */ var components_goodsList = (function () {
  return react_default.a.createElement("div", {
    "class": "container"
  }, allGoods.map(function (goods) {
    return react_default.a.createElement("div", {
      "class": "goods-item"
    }, react_default.a.createElement("img", {
      src: goods.imgUrl
    }), react_default.a.createElement("div", {
      "class": "goods-name"
    }, goods.goodsName));
  }), react_default.a.createElement("div", null));
});
// EXTERNAL MODULE: ./src/pages/home/index.css
var home = __webpack_require__(7);

// CONCATENATED MODULE: ./src/pages/home/index.js




var tabList = [{
  title: '首页'
}, {
  title: '个人中心'
}];
/* harmony default export */ var pages_home = (function () {
  var _useState = Object(react["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var handleTabClick = function handleTabClick(index) {
    return setCurrent(index);
  };

  return react_default.a.createElement("div", {
    "class": "container"
  }, react_default.a.createElement("div", {
    "class": "goods-list"
  }, react_default.a.createElement(components_goodsList, null)), react_default.a.createElement("div", {
    "class": "tab-bar"
  }, tabList.map(function (item, index) {
    return react_default.a.createElement("div", {
      "class": index === current ? 'current' : '',
      onClick: function onClick() {
        return handleTabClick(index);
      }
    }, item.title);
  })));
});
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });



function createApp() {
  var container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  react_dom_default.a.render(react_default.a.createElement(pages_home, null), container);
}
"undefined" != typeof wx && wx.getSystemInfoSync || createApp();

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ })["default"];}