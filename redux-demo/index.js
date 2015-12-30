/**
 * @module index.js
 * @desc
 * @author Created by kimhou on 15/12/25
 */


import Select from './containers/index.jsx';
import List from './components/list';

ReactDOM.render(
	<div style={{padding:50,background:'#ccc'}}>
		<List list={[1,2]}/>
	</div>,
	document.getElementById('root'));