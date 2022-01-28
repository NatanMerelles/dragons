import { ButtonStyle } from "./style";

const Button = ({ children, startIcon, endIcon, ...buttonProps }) => {
	return (
		<ButtonStyle {...buttonProps}>
			{
				startIcon && (
					<span className='button-icon button-icon__start'>
						{startIcon}
					</span>
				)
			}

			{children}

			{
				endIcon && (
					<span className='button-icon button-icon__end'>
						{endIcon}
					</span>
				)
			}

		</ButtonStyle>
	)
}

export { Button }