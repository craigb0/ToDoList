const ToDoItem = (props) => {
	return(
		<div classname="ToDoItemBody">
    		<div className="Title">
      			{props.title}
    		</div>

    		<div className="Completion">
        		{String(props.completed)}
      		</div>
    	</div>
  );
};

export default ToDoItem;