import {useState} from "react";

const TaskForm = (props) => {
	return (
		<div className='TaskForm'>
			Task Name:{" "}
			<input
				type='text'
				value={props.title}
				onChange={(e) => props.changeName(e.target.value)}
			/>
			<br></br>
			Done:{" "}
			<input
				type='checkbox' //won't uncheck for some reason
				value={props.completed}
				onChange={(e) => props.changeDone(e.target.checked)}
			/>
		</div>
	);
};

export default TaskForm;
