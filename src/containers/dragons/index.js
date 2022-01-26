import styled from 'styled-components';
import { Header, Footer, Container } from '../../components';

const PageWrapper = styled.main`
	height: 100vh;
	width: 100vw;
`;

const ListWrapper = styled.div`
  
`;

const Content = styled(Container)`
  padding: 26px; 
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;


const Dragons = () => {
  return (
    <PageWrapper>
      <Header />

      <Content>
        <ContentTitle>
          <h2>Encontre seu Dragão:</h2>

          <button>+</button>
        </ContentTitle>

        <div>
          <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
        </div>
      </Content>

      <Footer />
    </PageWrapper>
  )
}

export { Dragons }