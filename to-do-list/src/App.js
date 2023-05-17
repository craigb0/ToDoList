import "./App.css";
import React from "react";
import ItemList from "./components/ItemList";
import OldAddButton from "./components/OldAddButton";
import axios from "axios";
// import AddButton from "./AddButton";

class App extends React.Component {
	state = {
		taskList: [],
		id: 1,
	};

	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((response) => {
				const apiTasks = response.data;
				const tasksToSet = apiTasks.slice(0, 5);
				this.setState({
					taskList: tasksToSet,
					id: tasksToSet.length + 1,
				});
			})
			.catch((error) => {
				console.error("Error fetching tasks:", error);
			});
	}

	addTask = (taskData) => {
		this.setState((prevState) => ({
			taskList: [...prevState.taskList, taskData],
			id: prevState.id + 1,
		}));
	};

	removeTask = (index) => {
		this.setState((prevState) => {
			const newTaskList = prevState.taskList.filter(
				(task, i) => i + 1 !== index
			);
			return {
				taskList: newTaskList.map((task, i) => ({
					...task,
					id: i + 1,
				})),
				id: prevState.id - 1,
			};
		});
	};

	editTask = (index) => {
		this.setState((prevState) => ({}));
	};

	render() {
		return (
			<div>
				<div className='App-header'>
					To Do List
					<OldAddButton
						onClickFunction={this.addTask}
						id={this.state.id}
					/>
					{/* <AddButton /> */}
				</div>

				<div className='App'>
					<ItemList
						tasks={this.state.taskList}
						delFunction={this.removeTask}
					/>
				</div>
			</div>
		);
	}
}

export default App;
