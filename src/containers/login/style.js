import styled from 'styled-components';

export const PageWrapper = styled.main`
	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
	margin-bottom: 48px;

	font-family: 'Archivo', sans-serif;
`;

export const Panel = styled.div`
	background: ${props => props.theme.colors.secondary};
	max-width: 562px;
	padding: 54px;
	border-radius: 16px;

 	box-shadow:	0 2px 6px rgba(0, 0, 0, 0.15);

	 @media (max-width: 600px) {
		background: transparent;
		box-shadow: none;
	}
`;
