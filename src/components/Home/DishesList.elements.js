import styled from 'styled-components/macro';

export const Container = styled.div`
	width: min(1100px, 90%, 60vw);
	margin: 0 auto;
	align-items: center;
	text-align: center;
	justify-content: center;
`;

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 30px;
	align-items: center;
	text-align: center;
	justify-content: center;
	margin: 0 auto;
	justify-items: center;
`;

