import styled from 'styled-components/macro';

export const Item = styled.div`
	height: 430px;
	width: 310px;
	border: 4px solid #2f2838;
	border-radius: 15px;
	background: ${({ isSearching }) => (isSearching ? '#42394f' : '#383043')};
	transition: 0.3s;
`;

export const Title = styled.h1`
	font-size: 17px;
	line-height: 1.3em;
	font-weight: 500;
	color: white;
	font-family: 'Poppins', Sans-serif;
	text-align: center;
	padding: 0px 30px 20px 40px;
	text-shadow: 0px 0px 7px rgba(206, 206, 206, 0.5);
	margin: 0 auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media screen and (max-width: 991px) {
		max-width: 100%;
	}
`;

export const DishInfo = styled.p`
	font-size: 14px;
	line-height: 1.3em;
	font-weight: 500;
	color: white;
	font-family: 'Poppins', Sans-serif;
	text-align: center;
`;

export const SubContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 35px;
	flex-direction: row;
`;

export const DishesColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DishesRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	> * {
		padding-right: 5px;
	}
`;
