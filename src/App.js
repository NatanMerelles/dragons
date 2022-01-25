import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from './contexts';
import GlobalStyle from './styles/globalStyle';
import ThemeProvider from './styles/themeProvider';
import { PrivateContent } from './components';
import { Login, Dragons } from './containers';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <ThemeProvider>
          <GlobalStyle />

          <Routes>
            <Route path="/login" exact element={<Login />} />

            <Route path="/" exact element={
              <PrivateContent>
                <Dragons />
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