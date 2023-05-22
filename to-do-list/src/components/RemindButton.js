import {DatePicker} from "@mui/x-date-pickers";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";

const RemindButton = (props) => {
	return (
		<MDBBtn
			color='tertiary'
			floating
			// onClick={toggleModal}
		>
			<MDBIcon icon='clock' />
		</MDBBtn>
	);
};

export default RemindButton;
