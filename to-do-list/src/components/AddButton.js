import React from "react";
import {useDispatch} from "react-redux";
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

const AddButton = (props) => {
	const dispatch = useDispatch();
	const [modalVis, setModalVis] = useState(false);
	const [name, setName] = useState("");
	const [done, setDone] = useState(false);

	const toggleModal = () => {
		setModalVis(!modalVis);
		setName("");
		setDone(false);
	};

	const handleClick = () => {};

	return (
		<div className='AddButton'>
			<MDBBtn onClick={toggleModal} outline color='success'>
				Add Task
			</MDBBtn>
			<MDBModal show={modalVis} setShow={setModalVis} tabIndex='-1'>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Modal title</MDBModalTitle>
							<MDBBtn
								className='btn-close'
								color='none'
								onClick={toggleModal}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>...</MDBModalBody>

						<MDBModalFooter>
							<MDBBtn color='secondary' onClick={toggleModal}>
								Close
							</MDBBtn>
							<MDBBtn>Save changes</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</div>
	);
};

export default AddButton;
