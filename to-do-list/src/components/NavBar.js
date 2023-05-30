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
				<MDBContainer fluid></MDBContainer>
			</MDBNavbar>
		</header>
	);
};

export default NavBar;
