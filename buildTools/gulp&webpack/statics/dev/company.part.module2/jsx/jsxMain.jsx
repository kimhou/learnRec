/**
 * @module module1/jsx/jsxMain
 * @description jsx主文件
 * @author kimhou create on 15/10/27 15:52
 */


var Comp1 = require('./jsxComp1.jsx');

module.exports = React.createClass({
  render() {
    return (
      <div>react 主文件 <Comp1/></div>
    );
  }
});
;