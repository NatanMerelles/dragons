import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useGlobalContext } from '../../contexts';

import { Form } from '../../components';
import {
	PageWrapper,
	Title,
	Panel,
	Image,
	Content,
	Backdrop,
	Overlap,
	IconsWrapper,
	LinksWrapper,
	Link
} from './style';

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
				<Panel.Item className='panel-item panel-item__login'>
					<Title>Seja Bem-vindo(a) ao DragonsRepo</Title>

					<Form>
						<Form.Row>
							<Form.Input
								ref={usernameRef}
								type='text'
								aria-label='login'
								placeholder="Digite seu Login"
							/>
						</Form.Row>

						<Form.Row>
							<Form.Input
								ref={passwordRef}
								type='password'
								aria-label='password'
								placeholder="Digite sua Senha"
							/>
						</Form.Row>

						<Form.Row>
							<Form.Button
								fullWidth
								onClick={handleButtonLogin}
							>
								Login
							</Form.Button>
						</Form.Row>
					</Form>
				</Panel.Item>

				<Panel.Item className='panel-item panel-item__image'>
					<Image src='dragon.jpg' />

					<Overlap>
						<Backdrop />

						<Content>
							<IconsWrapper>
								<Link
									href='https://github.com/NatanMerelles/dragons'
									target='_blank'
									rel='noopener'
								>
									<FontAwesomeIcon icon={faGithub} />
								</Link>

								<Link
									href='https://www.linkedin.com/in/natan-merelles-36n/'
									target='_blank'
									rel='noopener'
								>
									<FontAwesomeIcon icon={faLinkedin} />
								</Link>
							</IconsWrapper>

							<LinksWrapper>
								<h3>
									leia sobre dragões:
								</h3>

								<p>
									<Link
										href='https://www.bbc.com/portuguese/vert-earth-37635731'
										target='_blank'
										rel='noopener'
									>
										Dragões poderiam existir na vida real?
									</Link>
								</p>

								<p>
									<Link
										href='https://super.abril.com.br/mundo-estranho/dinossauros-deuses-mito-dos-dragoes-ao-longo-dos-milenios/'
										target='_blank'
										rel='noopener'
									>
										Dragões ao longo dos milênios.
									</Link>
								</p>
							</LinksWrapper>
						</Content>
					</Overlap>
				</Panel.Item>
			</Panel >
		</PageWrapper >
	)
}

export { Login }