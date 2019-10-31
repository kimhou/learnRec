/**
 * @module List
 * @desc list
 * @author Created by kimhou on 15/12/30
 */
var style = '.example-enter {\
opacity: 0.01;\
margin-right:-100px;\
transition: opacity 1s ease-in;\
}\
\
.example-enter.example-enter-active {\
  opacity: 1;\
  margin-right:0;\
}\
\
.example-leave {\
  opacity: 1;\
  transition: opacity 1s ease-in;\
}\
\
.example-leave.example-leave-active {\
  opacity: 0.01;\
  margin-left:-100px;\
}\
\
.item {\
	display: inline-block;\
  width:100px;\
  border:1px solid red;\
  padding:10px;\
  margin:10px;\
}';

var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var count = 4;

const List = React.createClass({
	displayName: 'List',

	getInitialState() {
		return {
			list: [0, 1,2,3]
		};
	},

	add(){
		var list = this.state.list.concat([prompt('Enter some text')]);
		this.setState({
			list: list
		});
	},

	render() {
		return (
			<div>
				<style>{style}</style>
				<a href="javascript:;"
				   onClick={this.add.bind(this)}>add</a>
				<div>
					<CSSTransitionGroup transitionName="example"
										transitionEnterTimeout={500} transitionLeaveTimeout={300}>
						{
							this.state.list.map((item)=>{
								return <div className="item">{item}</div>
								})
							}
					</CSSTransitionGroup>
				</div>
			</div>
		);
	}
});

export default List;