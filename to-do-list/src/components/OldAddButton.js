import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../redux/taskListSlice";
import {increment, selectId} from "../redux/idSlice";

const AddButton = (props) => {
	const [taskData, setTaskData] = useState("");
	const [done, setDone] = useState(false);
	const dispatch = useDispatch();
	const id = useSelector(selectId);

	const handleClick = () => {
		if (taskData.trim() !== "") {
			dispatch(
				addTask({
					title: taskData,
					completed: done,
					id: id,
				})
			);
			setTaskData("");
			dispatch(increment());
		}
	};

	return (
		<div className='AddButton'>
			Task Name:{" "}
			<input
				type='text'
				value={taskData}
				onChange={(e) => setTaskData(e.target.value)}
			/>
			<br></br>
			Done:{" "}
			<input
				type='checkbox' //won't uncheck for some reason
				value={done}
				onChange={(e) => setDone(e.target.checked)}
			/>
			<br></br>
			<button onClick={handleClick}>Add Task</button>
		</div>
	);
};

export default AddButton;
