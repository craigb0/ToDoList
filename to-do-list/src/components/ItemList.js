import {useSelector} from "react-redux";
import ToDoItem from "./ToDoItem";
import {selectTaskList} from "../redux/taskListSlice";

const ItemList = (props) => {
	const tasks = useSelector(selectTaskList);
	return (
		<div className='itemList'>
			{tasks.map((task) => (
				<div>
					<ToDoItem
						title={task.title}
						completed={task.completed}
						id={task.id}
						key={task.id}
					/>
				</div>
			))}
		</div>
	);
};

export default ItemList;
