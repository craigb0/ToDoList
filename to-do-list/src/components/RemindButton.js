import {DateTimePicker} from "@mui/x-date-pickers";
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

const RemindButton = (props) => {
	const [modalVis, setModalVis] = useState(false);
	const [time, setTime] = useState(dayjs().add(600, "seconds"));
	const [running, setRunning] = useState(false);
	const [alarmVis, setAlarmVis] = useState(false);

	const saveTime = () => {
		setRunning(true);
		props.setSecs(time.diff(dayjs(), "second"));
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
	const cancel = () => {
		setRunning(false);
		props.setSecs(0);
	};

	useEffect(() => {
		let timer;
		if (running) {
			timer = setInterval(() => {
				props.setSecs((prevSecs) => {
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
								<MDBModalTitle>Set Reminder</MDBModalTitle>
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
								<MDBBtn onClick={saveTime}>Set reminder</MDBBtn>
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
							<MDBModalBody>
								{Math.floor(props.secs / 86400)}:
								{new Date((props.secs % 86400) * 1000)
									.toISOString()
									.slice(11, 19)}
							</MDBModalBody>

							<MDBModalFooter>
								<MDBBtn color='secondary' onClick={toggleModal}>
									Close
								</MDBBtn>
								<MDBBtn
									color={
										props.secs >>> 0 ? "danger" : "success"
									}
									onClick={cancel}
								>
									{props.secs >>> 0 ? "Cancel" : "Done"}
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
						{props.name} done!
					</Alert>
				</Snackbar>
			</>
		);
	}
};

export default RemindButton;
