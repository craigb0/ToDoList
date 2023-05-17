const ToDoItem = (props) => {
	const handleDelClick = () => {
		props.delFunction(props.id);
	};

	return (
		<div classname='ToDoItemBody'>
			<div className='Title'>
				<h2>
					{props.title} {props.id}
				</h2>
			</div>

			<div className='Completion'>
				{props.completed === true ? "Done" : "Not done"}
			</div>
			<br></br>
			<div className='DeleteButton'>
				<button onClick={handleDelClick}>Delete</button>
			</div>
		</div>
	);
};

export default ToDoItem;
