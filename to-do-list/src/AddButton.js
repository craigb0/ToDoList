import React from "react";

const AddButton = (props) => {
	const handleClick = () => {
		const task = window.prompt("Enter the task:");
	};

	return (
		<div className='AddButton'>
			<button onClick={handleClick}>TEST</button>
		</div>
	);
};

export default AddButton;
