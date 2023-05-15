const AddButton = (props) => {
    const handleClick = () => props.onClickFunction(props.array);
    return (
        <button onClick={handleClick}>Add a task</button>
    );
}

export default AddButton;