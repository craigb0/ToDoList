const ToDoItem = (props) => {
  const handleClick = () => {
    props.onClickFunction(props.id);
  };

  return (
    <div classname="ToDoItemBody">
      <div className="Title">
        <h2>
          {props.title} {props.id}
        </h2>
      </div>

      <div className="Completion">
        {props.completed === true ? "Done" : "Not done"}
      </div>
      <br></br>
      <div className="DeleteButton">
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
};

export default ToDoItem;
