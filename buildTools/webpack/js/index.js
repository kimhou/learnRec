/**
 * @module index
 * @description indexMod
 * @author kimhou create on 15/10/12 14:35
 */

var ReactDOM = React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var Page = require('../jsx/page.jsx');
var ejsContent = require('../ejs/temp1.ejs');
var css = require('../css/style.css');

module.exports = new class{
    constructor(){
        $(window).load(function () {
            this.init();
        }.bind(this));
    }

    init(){
        ReactDOM.render(<Page/>, document.getElementById('content1'));

        $('body').append(ejsContent({msg: 'ejs module'}))

        .append($('<div><button>async load</button></div>').click(function () {

                require.ensure([], function () {
                    var mod1 = require('./mod1');
                    new mod1().say('js module mod1, async loaded!');
                });

            }));

    }

}();