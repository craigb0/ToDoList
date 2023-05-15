const ToDoItem = (props) => {
	return(
		<div classname="ToDoItemBody">
    		<div className="Title">
      			<h2>{props.title}</h2>
    		</div>

    		<div className="Completion">
        		{String(props.completed)}
      		</div>
    	</div>
  );
};

export default ToDoItem;