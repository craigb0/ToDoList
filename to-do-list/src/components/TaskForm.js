import {useState} from "react";
import {MDBCheckbox, MDBCol, MDBInput} from "mdb-react-ui-kit";

const TaskForm = (props) => {
	return (
		<form>
			<MDBCol className='d-flex justify-content-center'>
				<MDBInput
					label='Task name'
					id='name'
					type='text'
					placeholder={props.title}
					onChange={(e) => props.changeName(e.target.value)}
				/>
			</MDBCol>
			<MDBCol className='d-flex justify-content-center'>
				<MDBCheckbox
					id='done'
					label='Completed'
					type='checkbox'
					placeholder={props.completed}
					onChange={(e) => props.changeDone(e.target.checked)}
				/>
			</MDBCol>
		</form>
	);
};

export default TaskForm;
