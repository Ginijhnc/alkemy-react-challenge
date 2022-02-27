import styled from 'styled-components/macro';

export const Container = styled.div`
	max-width: 100%;
	margin-right: auto;
	padding-right: 50px;
	padding-left: 50px;
	padding-bottom: 75px;
	background-color: #332c3d;
	text-align: center;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;
