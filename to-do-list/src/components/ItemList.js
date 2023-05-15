import ToDoItem from "./ToDoItem";


const ItemList = (props) =>{
	return(
		<div className="itemList">
			{props.tasks.map((task) => <ToDoItem title={task.title} completed={task.completed} id={task.id} onClickFunction = {props.onClickFunction}/>)}
		</div>
	);
};

export default ItemList;