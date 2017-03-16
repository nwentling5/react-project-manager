import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
		return (
			<li className="Todo">
                {this.props.todo.title}
			</li>
		);
	}
}

ToDoItem.propTypes = {
    todo: React.PropTypes.object,
}

export default ToDoItem;