import styled from 'styled-components/macro';

export const Input = styled.input`
	width: ${({ Large }) =>
		Large ? 'min(400px, 80%, 70vw)' : 'min(300px, 90%, 50vw)'};
	height: ${({ Large }) => (Large ? '35px' : '25px')};
	background: #645678;
	border: 3px solid #292331;
	border-radius: 20px;
	outline: none;
	font-size: ${({ Large }) => (Large ? '17px' : '15px')};
	color: white;
	font-family: 'Poppins', Sans-serif;
	text-align: center;
	transition: 0.3s ease-out;
	margin-bottom: 40px;

	&:focus {
		transition: 0.3s ease-out;
		box-shadow: 0px 0px 10px rgba(100, 86, 120, 0.8);
	}

	@media screen and (max-width: 991px) {
		margin-bottom: 0px;
	}
`;

export const GridWrapper = styled.div`
	width: ${({ searchResults }) =>
		searchResults
			? 'min(1400px, 90%, 80vw)'
			: 'width: min(1500px, 90%, 80vw);'};
	display: grid;
	grid-template-columns: ${({ searchResults }) =>
		searchResults
			? 'repeat(auto-fit, minmax(300px, 1fr));'
			: 'repeat(auto-fit, minmax(400px, 1fr));'};
	gap: 30px;
	align-items: center;
	text-align: center;
	justify-content: center;
	margin: 0 auto;
	justify-items: center;

	&:last-child {
		padding-bottom: 50px;
	}

	@media screen and (max-width: 991px) {
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

export const Button = styled.button`
	background-color: #544864;
	color: white;
	font-size: 16px;
	font-family: 'Poppins', sans-serif;
	border: 3px solid #635576;
	height: 45px;
	width: 120px;
	border-radius: 20px;
	cursor: pointer;
	transition: 0.2s;
	margin-top: 20px;

	&:hover {
		background-color: #5b4e6d;
		border-color: #6b5c7f;
	}
`;

export const SubmitButton = styled.button`
	background-color: #4caf50; /* Green */
	border: none;
	color: white;
	height: 40px;
	width: 100px;
	border-radius: 30px;
	padding: 0 auto;
	justify-content: center;
	margin: 0 auto;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;

	@media screen and (max-width: 991px) {
		margin-bottom: 20px;
	}
`;

export const ValidationMessage = styled.h4`
	font-size: 17px;
	line-height: 1.3em;
	font-weight: 500;
	color: #d3c0ee;
	font-family: 'Poppins', Sans-serif;
	text-align: center;
	margin-top: -25px;

	@media screen and (max-width: 991px) {
		font-size: 15px;
		margin-top: 25px;
	}
`;
