/**
 * @module Select
 * @desc 下拉选择器
 * @author Created by kimhou on 15/12/15
 */
import React from 'react';
import classNames from 'classnames';
debugger;
const Select = React.createClass({
	displayName: 'Select',

	PropTypes: {
		list: React.PropTypes.array.isRequired,
		selected: React.PropTypes.any.isRequired,
		disabled: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		width: React.PropTypes.number,
		maxWidth: React.PropTypes.number,
		classes: React.PropTypes.array
	},

	getDefaultProps() {
		return {
			list: [],
			selected: undefined,
			disabled: false,
			onChange: ()=> {
			},
			classes: [],
			width: 'auto',
			maxWidth: '20em'
		};
	},

	getInitialState() {
		debugger;
		return {
			isOpen: false
		};
	},

	toggleOpen(isOpen = !this.state.isOpen){
		!this.props.disabled && this.setState({
			isOpen: isOpen
		});
	},

	onSeletedItem(regionId, region){
		this.toggleOpen();
		this.props.onChange(regionId, region);
	},

	getSelectedItem(){
		var selected = $.grep(this.props.list, x=>x.value == this.props.selected);
		return selected && selected.length && selected[0];
	},

	render() {
		var classesObj = {
			'tc-15-dropdown': true,
			'tc-15-menu-active': this.state.isOpen,
			'disabled': this.props.disabled || this.props.list.length === 0
		};
		this.props.classes.map((item=> {
			classesObj[item] = true;
		}));
		var classes = classNames(classesObj);
		var selectedItem = this.getSelectedItem();
		return (
			<div ref="container"
				 className={classes}>
				<a onClick={this.toggleOpen.bind(this, undefined)}
				   style={{width: this.props.width, maxWidth: this.props.maxWidth}}
				   href="javascript:;"
				   className="tc-15-dropdown-link">{selectedItem && selectedItem.text || '无数据'}<i
					className="caret"></i></a>
				<ul className="tc-15-dropdown-menu" role="menu">
					{this.props.list.map((item)=> {
						return <li role="presentation"
								   className={classNames({'selected': this.props.selected == item.value})}>
							<a onClick={this.onSeletedItem.bind(this, item.value, item)}
							   role="menuitem"
							   href="javascript:;">{item.text}</a>
						</li>
						})}
				</ul>
			</div>
		);
	}
});

export default Select;