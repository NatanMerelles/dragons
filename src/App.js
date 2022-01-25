import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalContextProvider } from './contexts';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import { PrivateContent } from './components';
import { Login } from './containers';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Routes>
            <Route path="/login" exact element={<Login />} />

            <Route path="/" exact element={
              <PrivateContent>
                <div>root</div>
              </PrivateContent>
            } />

            <Route path="dragons/:dragonId" exact element={
              <PrivateContent>
                <div>dragão</div>
              </PrivateContent>
            } />

          </Routes>
        </ThemeProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;