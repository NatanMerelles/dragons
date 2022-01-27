import styled from 'styled-components';

const Item = styled.div`
	flex: 1;
	min-height: 0;

	padding: 3.6rem;
`;

const Panel = styled.div`
	background: ${props => props.theme.colors.secondary};
	max-width: 58rem;
	border-radius: 16px;
	margin: 1.6rem;
	display: flex;
	overflow: hidden;

 	box-shadow:	0 2px 6px rgba(0, 0, 0, 0.15);

	 @media (max-width: 600px) {
		flex-direction: column;
	}
`;

Object.assign(Panel, { Item })

export { Panel }