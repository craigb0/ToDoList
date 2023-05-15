const ToDoItem = (props) => {
	return(
		<div classname="ToDoItemBody">
    		<div className="Title">
      			<h2>{props.title} {props.id}</h2>
    		</div>

    		<div className="Completion">
        		{props.completed === true ? 'Done' : 'Not done'}
      		</div>
    	</div>
  );
};

export default ToDoItem;