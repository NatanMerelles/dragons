import styled from 'styled-components';

const Panel = styled.div`
	background: ${props => props.theme.colors.secondary};
	max-width: 56rem;
	padding: 5.4rem;
	border-radius: 16px;

 	box-shadow:	0 2px 6px rgba(0, 0, 0, 0.15);

	 @media (max-width: 600px) {
		background: transparent;
		box-shadow: none;
	}
`;

export { Panel }