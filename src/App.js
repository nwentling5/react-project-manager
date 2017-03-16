import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from'./Components/AddProject';
import ToDos from './Components/Todos';

import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			projects: [],
			todos: []
		}
	}

	getTodos(){
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/todos',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({todos: data}, function(){
					console.log(this.state);
				});
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}
		});
	}

	getProjects(){
			this.setState({projects: [
			{
				id: uuid.v4(),
				title: 'Business Website',
				category: 'Web Design'
			},
			{
				id: uuid.v4(),
				title: 'Social App',
				category: 'Mobile Developement'
			},
			{
				id: uuid.v4(),
				title: 'Ecommerece Shopping Cart',
				category: 'Web Developement'
			}
			]
		});
	}

	// Fires everytime a component is rerendered. - This is where you want to to an Ajax call
	componentWillMount(){
		this.getProjects();
		this.getTodos();
	}

	componentDidMount(){
		this.getTodos();
	}

	handleAddProject(project){
		let projects = this.state.projects;
		projects.push(project);
		this.setState({projects:projects});
	}

	handleDeleteProject(id){
		let projects = this.state.projects;
		let index = projects.findIndex( x => x.id ===id );
		projects.splice(index, 1);
		this.setState({projects:projects});
	}

	render() {
		return (
			<div className="App">
				<AddProject addProject={this.handleAddProject.bind(this)}/>
				<Projects  projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
				<hr />
				<ToDos todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
