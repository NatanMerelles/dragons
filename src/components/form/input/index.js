import styled from 'styled-components';

export const Input = styled.input`
	outline: none;

	width: 100%;
	height: 42px;
	font-size: 24px;
	border: 0;
	background: transparent;

	border-bottom: 1px solid;
	color: ${props => props.theme.colors.text};
	opacity: .4;
	transition: opacity .2s;

	:focus {
		opacity: 1;
	}
`;