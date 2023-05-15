import ToDoItem from "./ToDoItem";


const ItemList = (props) =>{
	return(
		<div>
			{props.tasks.map((task) => <ToDoItem title={task.title} completed={task.completed} id={task.id}/>)}
		</div>
	);
};

export default ItemList;