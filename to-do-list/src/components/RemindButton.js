import {renderTimeViewClock, DateTimePicker} from "@mui/x-date-pickers";
import {
	MDBBtn,
	MDBIcon,
	MDBModal,
	MDBModalBody,
	MDBModalContent,
	MDBModalDialog,
	MDBModalFooter,
	MDBModalHeader,
	MDBModalTitle,
} from "mdb-react-ui-kit";
import {useState} from "react";
import * as dayjs from "dayjs";

const RemindButton = () => {
	const [modalVis, setModalVis] = useState(false);
	const [time, setTime] = useState(dayjs());
	var relativeTime = require("dayjs/plugin/relativeTime");
	const saveTime = () => {};
	const [running, setRunning] = useState(false);

	const toggleModal = () => {
		setModalVis(!modalVis);
	};

	if (!running) {
		return (
			<>
				<MDBBtn color='tertiary' floating onClick={toggleModal}>
					<MDBIcon icon='clock' />
				</MDBBtn>
				<MDBModal show={modalVis} setShow={setModalVis} tabIndex='-1'>
					<MDBModalDialog>
						<MDBModalContent>
							<MDBModalHeader>
								<MDBModalTitle>
									Set Reminder{time.minute()}
								</MDBModalTitle>
								<MDBBtn
									className='btn-close'
									color='none'
									onClick={toggleModal}
								></MDBBtn>
							</MDBModalHeader>
							<MDBModalBody>
								<DateTimePicker
									disablePast={true}
									value={time}
									onChange={(e) => setTime(e)}
								/>
							</MDBModalBody>

							<MDBModalFooter>
								<MDBBtn color='secondary' onClick={toggleModal}>
									Close
								</MDBBtn>
								<MDBBtn>Save changes</MDBBtn>
							</MDBModalFooter>
						</MDBModalContent>
					</MDBModalDialog>
				</MDBModal>
			</>
		);
	}
};

export default RemindButton;
