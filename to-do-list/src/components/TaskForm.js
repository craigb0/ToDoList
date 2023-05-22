import {useState} from "react";
import {MDBCheckbox, MDBCol, MDBInput, MDBSwitch} from "mdb-react-ui-kit";

const TaskForm = (props) => {
	return (
		<form>
			<MDBCol className='d-flex justify-content-center'>
				<MDBInput
					label='Task name'
					id='name'
					type='text'
					defaultValue={props.title}
					value={props.title}
					onChange={(e) => props.changeName(e.target.value)}
				/>
			</MDBCol>
			<MDBCol className='d-flex justify-content-center'>
				<MDBSwitch
					id='done'
					label='Completed'
					type='checkbox'
					checked={props.completed}
					onChange={(e) => props.changeDone(e.target.checked)}
				/>
			</MDBCol>
		</form>
	);
};

export default TaskForm;
