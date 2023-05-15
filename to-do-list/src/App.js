import './App.css';
import React from "react";
import ItemList from './components/ItemList';
import AddButton from './components/AddButton';
import axios from 'axios';


class App extends React.Component {
	state ={
		taskList: [],
	};
	
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then(response => {
				const apiTasks = response.data;
				const tasksToSet = apiTasks.slice(0, 5);
				this.setState({
					taskList: tasksToSet,
				});

			})
			.catch(error => {
				console.error('Error fetching tasks:', error);
			});
	}

	addTask = (taskData) => {
		this.setState(prevState => ({
			taskList: [...prevState.taskList, taskData],
		}))
	}
	
	render() {
		return (
    		<div>
    			<div className='App-header'>
        			To Do List
					<AddButton onClickFunction = {this.addTask}/>
				</div>
				
				<div className='App'>
					<ItemList tasks={this.state.taskList}/>
				</div>
    		</div>
  		);
	}
}

export default App;
