import './App.css';
import React from "react";
import ItemList from './components/ItemList';
import AddButton from './components/AddButton';
import axios from 'axios';


class App extends React.Component {
	state ={
		taskList: [],
		id:1,
	};
	
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then(response => {
				const apiTasks = response.data;
				const tasksToSet = apiTasks.slice(0, 5);
				this.setState({
					taskList: tasksToSet,
					id: tasksToSet.length +1,
				});

			})
			.catch(error => {
				console.error('Error fetching tasks:', error);
			});
	}

	addTask = (taskData, idNum) => {
		this.setState(prevState => ({
			taskList: [...prevState.taskList, taskData],
			id: prevState.id +1,
		}))
	}

	removeTask = (index) => {
		this.setState(prevState => {
		  const newTaskList = prevState.taskList.filter((task, i) => i+1 !== index);
		  return {
			taskList: newTaskList.map((task, i) => ({
			  ...task,
			  id: i + 1,
			})),
			id: prevState.id -1,
		  };
		});
	}

	render() {
		return (
    		<div>
    			<div className='App-header'>
        			To Do List
					<AddButton onClickFunction = {this.addTask} id = {this.state.id}/>
				</div>
				
				<div className='App'>
					<ItemList tasks={this.state.taskList} onClickFunction = {this.removeTask}/>
				</div>
    		</div>
  		);
	}
}

export default App;
