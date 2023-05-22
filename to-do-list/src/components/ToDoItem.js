import {useDispatch} from "react-redux";
import {editTask, removeTask} from "../redux/taskListSlice";
import {decrement} from "../redux/idSlice";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBBtn,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalTitle,
	MDBModalBody,
	MDBModalFooter,
} from "mdb-react-ui-kit";
import {useEffect, useState} from "react";
import TaskForm from "./TaskForm";

const ToDoItem = (props) => {
	const dispatch = useDispatch();

	const handleDelClick = () => {
		dispatch(removeTask(props.id));
		dispatch(decrement());
	};

	const [modalVis, setModalVis] = useState(false);
	const [tempName, setTempName] = useState(props.title);
	const [tempDone, setTempDone] = useState(props.completed);

	const handleEditClick = () => {
		dispatch(
			editTask([
				props.id,
				{title: tempName, completed: tempDone, id: props.id},
			])
		);
		toggleModal();
	};

	const toggleModal = () => {
		setModalVis(!modalVis);
		setTempName(props.title);
		setTempDone(props.completed);
	};

	return (
		<div>
			<MDBCard shadow='0' border='black' alignment='center'>
				<MDBCardBody>
					<MDBCardTitle>{props.title}</MDBCardTitle>
					<MDBCardText>
						{props.completed === true ? "Done" : "Not done"}
					</MDBCardText>
					<MDBBtn outline onClick={toggleModal}>
						Edit
					</MDBBtn>
					<MDBModal
						show={modalVis}
						setShow={setModalVis}
						tabIndex='-1'
					>
						<MDBModalDialog>
							<MDBModalContent>
								<MDBModalHeader>
									<MDBModalTitle>Edit Task</MDBModalTitle>
									<MDBBtn
										className='btn-close'
										color='none'
										onClick={handleEditClick}
									></MDBBtn>
								</MDBModalHeader>
								<MDBModalBody>
									<TaskForm
										title={tempName}
										completed={tempDone}
										hint={true}
										changeName={setTempName}
										changeDone={setTempDone}
									/>
								</MDBModalBody>

								<MDBModalFooter>
									<MDBBtn
										color='secondary'
										onClick={toggleModal}
									>
										Close
									</MDBBtn>
									<MDBBtn onClick={handleEditClick}>
										Save changes
									</MDBBtn>
								</MDBModalFooter>
							</MDBModalContent>
						</MDBModalDialog>
					</MDBModal>{" "}
					<MDBBtn outline color='danger' onClick={handleDelClick}>
						Delete
					</MDBBtn>
				</MDBCardBody>
			</MDBCard>
		</div>
	);
};

export default ToDoItem;
