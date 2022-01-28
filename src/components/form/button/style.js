import styled, { css } from 'styled-components';

const variants = {
  primary: css`
		background: ${props => props.theme.colors.buttonPrimary};
		color: ${props => props.theme.colors.buttonSecondary};

		:hover {
			background: ${props => props.theme.colors.hoverPrimary};
		}
	`,
  secondary: css`
		background: ${props => props.theme.colors.buttonSecondary};
		color: ${props => props.theme.colors.buttonPrimary};

		:hover {
			background: ${props => props.theme.colors.secondary};
		}
	`,
  success: css`
		background: ${props => props.theme.colors.green};
		color: ${props => props.theme.colors.white};
	`,
  danger: css`
		background: ${props => props.theme.colors.danger};
		color: ${props => props.theme.colors.white};
	`,
  warning: css`
		background: ${props => props.theme.colors.warning};
		color: ${props => props.theme.colors.white};
	`,
}

const sizes = {
  small: css`
		padding: 0.6rem 0.8rem;
		font-size: 1.4rem;
	`,
  medium: css`
		padding: 0.8rem 1rem;
		font-size: 1.8rem;
	`,
  large: css`
		padding: 1rem 1.2rem;
		font-size: 2.2rem;
	`,
}

const ButtonStyle = styled.button`
	${({ size = 'medium' }) => sizes[size]}
	${({ variant = 'primary' }) => variants[variant]}
	width: ${props => props.fullWidth ? '100%' : 'initial'};

	display: inline-flex;
	align-items: center;
	justify-content: center;
	outline: none;
	border: 1px solid;
	border-radius: 12px;

	cursor: pointer;

	transition: all .35s ease-in-out;

	.button-icon {
		display: inline-flex;
		align-items: center;

		&__start {
			margin-right: 0.8rem;
		}

		&__end {
			margin-left: 0.8rem;
		}
	}
`;

export { ButtonStyle }