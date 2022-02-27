import React, { useState, useEffect } from 'react';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks
} from './Navbar.elements';
import { FaBars, FaTimes, FaSignOutAlt, FaHome, FaSearch } from 'react-icons/fa';
import logo from '../../media/logo.png'
import { useDispatch } from "react-redux";
import { types } from "../../types/types"
import { useLocation } from 'react-router-dom';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const dispatch = useDispatch();
	const location = useLocation();

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 1024) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const handleLogout = () => {
		const action = {
			type: types.signout
		}
		dispatch(action);
	}

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	if (location.pathname == '/login') {
		return null;
	}

	return (

		<Nav>
			<NavbarContainer>
				<NavLogo to='/home' onClick={closeMobileMenu}>
					<img src={logo} alt='Logo' />
				</NavLogo>
				<MobileIcon onClick={handleClick}>
					{click ? <FaTimes /> : <FaBars />}
				</MobileIcon>
				<NavMenu onClick={handleClick} click={click}>
					<NavItem>
						<NavLinks to='/home' onClick={closeMobileMenu}>
							<FaHome style={{ paddingRight: "5px" }} />
							Home
						</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='/search' onClick={closeMobileMenu}>
							<FaSearch style={{ paddingRight: "5px" }} />
							Search
						</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='/login' onClick={handleLogout}>
							<FaSignOutAlt style={{ paddingRight: "5px" }} />
							Sign Out
						</NavLinks>
					</NavItem>
				</NavMenu>
			</NavbarContainer>
		</Nav>
	)
}

export default Navbar
