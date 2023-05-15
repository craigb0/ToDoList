import ToDoItem from "./ToDoItem";


const ItemList = (props) =>{
	return(
		<div>
			{props.tasks.map((task) => <ToDoItem title={task.title} completed={task.completed}/>)}
		</div>
	);
};

export default ItemList;