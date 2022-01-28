import styled from 'styled-components';
import { Panel as PanelStyle } from '../../components';

const PageWrapper = styled.main`
	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	margin-bottom: 48px;

	font-family: 'Archivo', sans-serif;
`;


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

export { PageWrapper, Title, Panel, Image, Content, Backdrop, Overlap, IconsWrapper, LinksWrapper, Link }