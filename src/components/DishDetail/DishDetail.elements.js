import styled from 'styled-components/macro';

export const Container = styled.div`
	height: 90vh;
	padding-top: 100px;
	padding-bottom: 100px;
	text-align: center;
`;

export const SubContainer = styled.div`
	width: min(800px, 80%, 80vw);
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	align-items: center;

	@media screen and (max-width: 991px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const DetailsContainer = styled.div`
	display: flex;
	width: min(400px, 80%, 60vw);
	border: 4px solid #292331;
	border-radius: 10px;
	background: #40374c;
	margin: 30px auto;
	padding: 10px 50px;
	justify-content: center;
	align-items: center;
	margin-left: 50px;
	flex-direction: column;

	@media screen and (max-width: 991px) {
		margin: 0;
		margin-top: 30px;
	}
`;

export const Title = styled.h1`
	font-size: 30px;
	line-height: 1.3em;
	font-weight: 500;
	color: white;
	font-family: 'Poppins', Sans-serif;
	text-align: center;
	padding-left: 10px;

	@media screen and (max-width: 991px) {
		max-width: 100%;
	}
`;
