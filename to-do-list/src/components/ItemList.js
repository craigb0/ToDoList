import {useSelector} from "react-redux";
import ToDoItem from "./ToDoItem";
import {selectTaskList} from "../redux/taskListSlice";

const ItemList = (props) => {
	const tasks = useSelector(selectTaskList);
	return (
		<div className='itemList'>
			{tasks.map((task) => (
				<ToDoItem
					title={task.title}
					completed={task.completed}
					id={task.id}
				/>
			))}
		</div>
	);
};

export default ItemList;
