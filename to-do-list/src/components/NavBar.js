import React, {useState} from "react";
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBNavbarToggler,
	MDBContainer,
	MDBIcon,
	MDBCollapse,
	MDBBtn,
} from "mdb-react-ui-kit";

const NavBar = (props) => {
	const [vis, setVis] = useState(false);
	return (
		<header>
			<MDBNavbar expand='lg' light bgColor='white'>
				<MDBContainer fluid>
					<MDBNavbarToggler
						onClick={() => setVis(!vis)}
						aria-controls='navbarExample01'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<MDBIcon fas icon='bars' />
					</MDBNavbarToggler>
					<MDBCollapse navbar center show={vis}>
						<MDBNavbarNav className='d-flex align-content-center flex-wrap'></MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</header>
	);
};

export default NavBar;
