import React, { Component } from 'react';

class ProjectItem extends Component {
	// This is the beginning path to pass it back up to Projects and then to App
    deleteProject(id){
        this.props.onDelete(id);
    }
    
    render() {
		return (
			<li className="Project">
				<strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
			</li>
		);
	}
}

ProjectItem.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}

export default ProjectItem;