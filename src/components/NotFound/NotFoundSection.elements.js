import styled from 'styled-components/macro';

export const Container = styled.div`
	height: 80vh;
	padding-bottom: 100px;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
`;

export const NumberTitle = styled.h1`
	font-size: 130px;
	line-height: 1.3em;
	font-weight: 600;
	color: white;
	font-family: 'Poppins', Sans-serif;
	text-align: center;
	padding-left: 10px;
	margin: 0 auto;

	@media screen and (max-width: 991px) {
		max-width: 100%;
	}
`;
