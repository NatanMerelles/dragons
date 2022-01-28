import { useRef } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useGlobalContext } from '../../contexts';

import { Form, Panel as PanelStyle } from '../../components';
import { PageWrapper, Title } from './style';

const Image = styled.img`
	height: 100%;
	width: 100%;

	object-fit: contain;
	object-position: bottom;
`;

const Content = styled.div`
	z-index: 2;

	display: flex;
	flex-direction: column;
	justify-content: center;

	text-decoration: none;
	color: ${props => props.theme.colors.white};
	opacity: 0;
	transition: all 0.3s ease-in;
`;

const Backdrop = styled.div`
	position: absolute;
	inset: 0;
	z-index: 1;
	background: #212121;
	opacity: 0;
	transition: all 0.3s ease-in;
`;

const Overlap = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	

	:hover {

		${Backdrop}{
			opacity: 0.6;
		}

		${Content} {
			opacity: 1;
		}
	}

	@media (max-width: 600px){
		${Backdrop}{
			opacity: 0.6;
		}

		${Content} {
			opacity: 1;
		}
	}
`;

const IconsWrapper = styled.div`
	display: flex;
	justify-content: center;
  font-size: 3.2rem;
  margin-bottom: 1.2rem;

	> * {
		margin: 1.8rem;
	}
`;

const LinksWrapper = styled.div`
	text-align: center;

	font-size: 1.6rem;

	> * {
		margin-bottom: 0.8rem;
	}
`;

const Link = styled.a`
	color: ${props => props.theme.colors.white};
`;

const Panel = styled(PanelStyle)`
	max-width: 720px;

	.panel-item{
		&__image{
			position: relative; 
			min-height: 148px;
			padding: 0;
			background: black;
		}

		&__login{
			min-height: 340px;
		}
	}
`;

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