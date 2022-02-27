import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 100px;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px !important;
	}
`;

export const Nav = styled.nav`
	background: #26222f;
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: fixed;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 1024px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 1024px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 95vh;
		position: absolute;
		top: 70px;
		left: ${({ click }) => (click ? 0 : '-110%')};
		opacity: 1;
		transition: all 0.5s ease;
		background: #1f1c27f7;
		margin: 0 auto;
	}
`;

export const NavItem = styled.li`
	border-bottom: 2px solid transparent;
	transition: 0.4s ease all;

	&:hover {
		border-bottom: 2px solid white;
		transition: 0.4s ease all;
	}

	@media screen and (max-width: 1024px) {
		display: flex;
		width: 100%;
		margin-right: 60px;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(Link)`
	color: #fff;
	font-family: 'Poppins', Sans-serif;
	font-weight: 500;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	font-size: 18px;

	@media screen and (max-width: 1024px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		font-size: 20px;

		&:hover {
			color: #c9a270;
			transition: all 0.3s ease;
		}
	}
`;
