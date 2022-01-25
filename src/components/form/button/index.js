import styled from 'styled-components';

export const Button = styled.button`
	outline: none;
	
	width: 100%;
	height: 48px;
	font-size: 24px;
	background: ${props => props.theme.colors.text};
	border: 1px solid;
	border-radius: 12px;
	color: ${props => props.theme.colors.background};

	cursor: pointer;

	transition: all .35s ease-in-out;

	:hover, :focus {
		background: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors.text};
	}
`;
