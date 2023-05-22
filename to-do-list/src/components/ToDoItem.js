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
	MDBCardFooter,
	MDBIcon,
} from "mdb-react-ui-kit";
import {useState} from "react";
import TaskForm from "./TaskForm";
import RemindButton from "./RemindButton";

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
						<div style={{float: "center"}}>
							{props.completed === true ? "Done" : "Not done"}
						</div>
						<div style={{float: "right"}}>
							<RemindButton />
							<MDBBtn
								color='tertiary'
								floating
								onClick={toggleModal}
							>
								<MDBIcon icon='edit' />
							</MDBBtn>
							<MDBBtn
								color='tertiary'
								style={{color: "#dd4b39"}}
								floating
								onClick={handleDelClick}
							>
								<MDBIcon icon='trash' />
							</MDBBtn>
						</div>
					</MDBCardText>
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
				</MDBCardBody>
			</MDBCard>
		</div>
	);
};

export default ToDoItem;
