import styled from 'styled-components/macro';

export const Container = styled.div`
	width: min(600px, 80%, 70vw);
	border: 4px solid #292331;
	border-radius: 10px;
	background: #383043;
	margin: 60px auto;
	margin-top: 120px;
	padding: 40px 30px;
`;

export const SubContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 30px;
	flex-direction: row;

	@media screen and (max-width: 991px) {
		display: inline-block;
		padding: 0px 0px;
	}
`;

export const DishesColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DishesRow = styled.div`
	display: flex;
	flex-direction: row;
	vertical-align: middle;
	align-items: center;
`;

export const DishText = styled.h3`
	font-size: 18px;
	line-height: 1.3em;
	font-weight: 500;
	color: white;
	font-family: 'Poppins', Sans-serif;
	text-align: center;
	padding-left: 10px;

	@media screen and (max-width: 400px) {
		font-size: 15px;
	}
`;
