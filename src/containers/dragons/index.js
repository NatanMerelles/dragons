import styled from 'styled-components';
import { Header, Footer, Container } from '../../components';

export const PageWrapper = styled.main`
	height: 100vh;
	width: 100vw;
`;

const Dragons = () => {
  return (
    <PageWrapper>
      <Header />

      <main style={{ padding: '26px' }}>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
            <h2>Encontre seu Dragão:</h2>

            <button>+</button>
          </div>

          <div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>
            <div style={{ width: '10px', height: '50px', border: '1px solid black' }}></div>

          </div>
        </Container>
      </main>

      <Footer />
    </PageWrapper>
  )
}

export { Dragons }