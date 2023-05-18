import "./App.css";
import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import OldAddButton from "./components/OldAddButton";
import axios from "axios";
import { selectId } from "./redux/idSlice";
import { useSelector, useDispatch } from "react-redux";
// import AddButton from "./AddButton";

const App = () => {
	const [taskList, setTaskList] = useState([]);
	const [id, setId] = useState(1);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((response) => {
				const apiTasks = response.data;
				const tasksToSet = apiTasks.slice(0, 5);
				setTaskList(tasksToSet);
				setId(tasksToSet.length + 1);
			})
			.catch((error) => {
				console.error("Error fetching tasks:", error);
			});
	}, []);

	const addTask = (taskData) => {
		setTaskList((prevTaskList) => [...prevTaskList, taskData]);
		setId((prevId) => prevId + 1);
	};

	const removeTask = (index) => {
		setTaskList((prevTaskList) =>
			prevTaskList
				.filter((task, i) => i + 1 !== index)
				.map((task, i) => ({
					...task,
					id: i + 1,
				}))
		);
		setId((prevId) => prevId - 1);
	};

	const editTask = (index) => {
		// Your editTask logic goes here
	};

	return (
		<div>
			<div className='App-header'>
				To Do List {useSelector(selectId)}
				<OldAddButton onClickFunction={addTask} id={id} />
				{/* <AddButton /> */}
			</div>

			<div className='App'>
				<ItemList tasks={taskList} delFunction={removeTask} />
			</div>
		</div>
	);
};

export default App;
