import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardHeader,
	MDBContainer,
} from "mdb-react-ui-kit";

const Login = (props) => {
	return (
		<>
			<MDBContainer
				fluid
				className='d-flex align-items-center justify-content-center'
			>
				<header>
					<h1 className='mb-3'>To Do List</h1>
				</header>
			</MDBContainer>
			<MDBContainer
				fluid
				className='d-flex align-items-center justify-content-center'
			>
				<MDBCard shadow='0' border='black' alignment='center'>
					<MDBCardHeader>Login</MDBCardHeader>
					<MDBCardBody>
						<MDBBtn>Sign in with Microsoft</MDBBtn>
					</MDBCardBody>
				</MDBCard>
			</MDBContainer>
		</>
	);
};

export default Login;
