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
import {useEffect, useState} from "react";
import * as dayjs from "dayjs";
import {Alert, Snackbar} from "@mui/material";

const RemindButton = () => {
	const [modalVis, setModalVis] = useState(false);
	const [time, setTime] = useState(dayjs().add(10, "minutes"));
	const [running, setRunning] = useState(false);
	const [secs, setSecs] = useState(0);
	const [alarmVis, setAlarmVis] = useState(false);

	const saveTime = () => {
		setRunning(true);
		setSecs(time.diff(dayjs(), "seconds"));
		toggleModal();
	};

	const toggleModal = () => {
		if (!running) {
			setTime(dayjs().add(10, "minutes"));
		}
		setModalVis(!modalVis);
	};

	const alarm = () => {
		setAlarmVis(true);
	};

	const closeAlarm = () => {
		setAlarmVis(false);
		setRunning(false);
	};

	useEffect(() => {
		let timer;
		if (running) {
			timer = setInterval(() => {
				setSecs((prevSecs) => {
					if (prevSecs <= 0) {
						clearInterval(timer);
						alarm();
						return 0;
					}
					return prevSecs - 1;
				});
			}, 1000);
		}

		return () => {
			clearInterval(timer);
		};
	}, [running, time]);

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
									Set Reminder{time.format("DD:HH:mm")}
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
								<MDBBtn onClick={saveTime}>Save changes</MDBBtn>
							</MDBModalFooter>
						</MDBModalContent>
					</MDBModalDialog>
				</MDBModal>
			</>
		);
	} else {
		return (
			<>
				<MDBBtn color='tertiary' floating onClick={toggleModal}>
					<MDBIcon icon='clock' />
				</MDBBtn>
				<MDBModal show={modalVis} setShow={setModalVis} tabIndex='-1'>
					<MDBModalDialog>
						<MDBModalContent>
							<MDBModalHeader>
								<MDBModalTitle>Reminder</MDBModalTitle>
								<MDBBtn
									className='btn-close'
									color='none'
									onClick={toggleModal}
								></MDBBtn>
							</MDBModalHeader>
							<MDBModalBody>{secs}</MDBModalBody>

							<MDBModalFooter>
								<MDBBtn color='secondary' onClick={toggleModal}>
									Close
								</MDBBtn>
								<MDBBtn onClick={toggleModal}>
									Save changes
								</MDBBtn>
							</MDBModalFooter>
						</MDBModalContent>
					</MDBModalDialog>
				</MDBModal>
				<Snackbar open={alarmVis} onClose={closeAlarm}>
					<Alert
						onClose={closeAlarm}
						severity='info'
						sx={{width: "100%"}}
					>
						Task done!
					</Alert>
				</Snackbar>
			</>
		);
	}
};

export default RemindButton;
