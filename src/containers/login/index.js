import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../contexts';

import { Form, Panel } from '../../components';
import { PageWrapper, Title } from './style';

const Login = () => {
	const usernameRef = useRef({});
	const passwordRef = useRef({});

	const global = useGlobalContext();
	const navigate = useNavigate();
	const location = useLocation();

	const handleButtonLogin = (e) => {
		e.preventDefault();

		const username = usernameRef.current.value;
		const password = passwordRef.current.value;

		if (username === 'admin' && password === '123123') {
			const hasPrevRoute = location && location.state && location.state.from;
			const route = hasPrevRoute ? location.state.from.pathname : '/';

			global
				.signin(username)
				.then(() => {
					navigate(route, { replace: true });
				});
		}
	}

	return (
		<PageWrapper>
			<Panel>
				<Title>Seja Bem-vindo(a) ao DragonRepo</Title>

				<Form>
					<Form.Row>
						<Form.Input
							ref={usernameRef}
							type='text'
							placeholder="Digite seu Login"
						/>
					</Form.Row>

					<Form.Row>
						<Form.Input
							ref={passwordRef}
							type='password'
							placeholder="Digite sua Senha"
						/>
					</Form.Row>

					<Form.Row>
						<Form.Button fullWidth onClick={handleButtonLogin}>
							Login
						</Form.Button>
					</Form.Row>
				</Form>
			</Panel >
		</PageWrapper >
	)
}

export { Login }