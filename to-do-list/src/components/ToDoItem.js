import {useDispatch} from "react-redux";
import {removeTask} from "../redux/taskListSlice";
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
import {useState} from "react";
import TaskForm from "./taskForm";

const ToDoItem = (props) => {
	const dispatch = useDispatch();

	const handleDelClick = () => {
		dispatch(removeTask(props.id));
		dispatch(decrement());
	};

	const [modalVis, setModalVis] = useState(false);
	const [name, setName] = useState(props.title);
	const [done, setDone] = useState(props.completed);
	const [tempName, setTempName] = useState(name);
	const [tempDone, setTempDone] = useState(done);

	const handleEditClick = () => {
		setName(tempName);
		setDone(tempDone);
		toggleModal();
	};

	const toggleModal = () => {
		setModalVis(!modalVis);
		setTempName(name);
		setTempDone(done);
	};

	return (
		<div className='bg-dark'>
			<MDBCard shadow='0' border='black' background='Black'>
				<MDBCardBody>
					<MDBCardTitle>{name}</MDBCardTitle>
					<MDBCardText>
						{done === true ? "Done" : "Not done"}
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
										taskId={props.id}
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
