import styled from 'styled-components';
import Background from '../../background.png';

const Item = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	margin-bottom: 46px;

	:last-child{
		margin: 0;
	}
`;

const Form = styled.form``;

Object.assign(Form, { Item });

const Title = styled.h1`
	margin-bottom: 48px;

	font-family: 'Archivo', sans-serif;
`;

const Card = styled.div`
	background: ${props => props.theme.colors.darkGray};
	opacity: .6;
	max-width: 562px;
	padding: 54px;
	border-radius: 16px;
`;

const Input = styled.input`
	outline: none;

	width: 100%;
	height: 42px;
	font-size: 24px;
	border: 0;
	background: transparent;

	border-bottom: 1px solid;
	color: white;
	opacity: .4;
	transition: opacity .2s;

	:focus {
		opacity: 1;
	}
`;

const Button = styled.button`
	outline: none;
	
	width: 328px;
	height: 48px;
	font-size: 24px;
	background: white;
	border: 1px solid;
	border-radius: 12px;
	color: #2C2C2C;

	cursor: pointer;

	transition: all .35s ease-in-out;

	:hover, :focus {
		background: #2C2C2C;
		color: white;
	}
`;

const Wrapper = styled.main`
	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Login = () => {
	return (
		<Wrapper>
			<Card>

				<Title>Seja Bem-vindo(a) ao Dragon Repo</Title>

				<Form>
					<Form.Item>
						<Input type='text' placeholder="Digite seu Login" />
					</Form.Item>

					<Form.Item>
						<Input type='password' placeholder="Digite sua Senha" />
					</Form.Item>

					<Form.Item>
						<Button onClick={e => e.preventDefault()}>Login</Button>
					</Form.Item>
				</Form>
			</Card >
		</Wrapper >
	)
}

export { Login }