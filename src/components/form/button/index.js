import styled, { css } from 'styled-components';

const sizes = {
	small: css`
		padding: 0.25rem 0.5rem;
		font-size: 1rem;
	`,
	medium: css`
		padding: 0.5rem 1rem;
		font-size: 1.5rem;
	`,
	large: css`
		padding: 1rem 2rem;
		font-size: 2.4rem;
	`,
}


export const Button = styled.button`
	${({ size = 'medium' }) => sizes[size]}
	width: ${props => props.fullWidth ? '100%' : 'initial'};

	outline: none;
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
