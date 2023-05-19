import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {
	MDBBtn,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalTitle,
	MDBModalBody,
	MDBModalFooter,
} from "mdb-react-ui-kit";
import {increment, selectId} from "../redux/idSlice";
import {addTask} from "../redux/taskListSlice";
import TaskForm from "./TaskForm";

const AddButton = (props) => {
	const dispatch = useDispatch();
	const id = useSelector(selectId);
	const [modalVis, setModalVis] = useState(false);
	const [tempName, setTempName] = useState("");
	const [tempDone, setTempDone] = useState(false);

	const toggleModal = () => {
		setModalVis(!modalVis);
		setTempName("");
		setTempDone(false);
	};

	const handleClick = () => {
		dispatch(
			addTask({
				title: tempName,
				completed: tempDone,
				id: id,
			})
		);
		dispatch(increment());
		toggleModal();
	};

	return (
		<div className='AddButton'>
			<MDBBtn onClick={toggleModal} outline color='success'>
				Add Task
			</MDBBtn>
			<MDBModal show={modalVis} setShow={setModalVis} tabIndex='-1'>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Add Task</MDBModalTitle>
							<MDBBtn
								className='btn-close'
								color='none'
								onClick={toggleModal}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<TaskForm
								title={tempName}
								completed={tempDone}
								taskId={useSelector(selectId)}
								changeName={setTempName}
								changeDone={setTempDone}
							/>
						</MDBModalBody>

						<MDBModalFooter>
							<MDBBtn color='secondary' onClick={toggleModal}>
								Close
							</MDBBtn>
							<MDBBtn onClick={() => handleClick()}>
								Save changes
							</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</div>
	);
};

export default AddButton;
