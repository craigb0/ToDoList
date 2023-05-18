import "./App.css";
import React, {useEffect} from "react";
import ItemList from "./components/ItemList";
import OldAddButton from "./components/OldAddButton";
import axios from "axios";
import {selectId, setId} from "./redux/idSlice";
import {useSelector, useDispatch} from "react-redux";
import {setList} from "./redux/taskListSlice";
// import AddButton from "./AddButton";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((response) => {
				const apiTasks = response.data;
				const tasksToSet = apiTasks.slice(0, 5);
				dispatch(setList(tasksToSet));
			})
			.catch((error) => {
				console.error("Error fetching tasks:", error);
			})
			.finally(() => {
				dispatch(setId(6));
			});
	}, []);

	return (
		<div>
			<div className='App-header'>
				To Do List
				<OldAddButton id={useSelector(selectId)} />
				{/* <AddButton /> */}
			</div>

			<div className='App'>
				<ItemList />
			</div>
		</div>
	);
};

export default App;
