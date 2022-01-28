import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { GlobalContextProvider } from './contexts';
import ThemeProvider from './styles/themeProvider';

import GlobalStyle from './styles/globalStyle';
import { PrivateContent } from './components';
import { Login, Dragon, Dragons, CreateDragon } from './containers';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

const App = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <GlobalStyle />

            <Routes>
              <Route path="/login" exact element={<Login />} />

              <Route path="/" exact element={
                <PrivateContent>
                  <Dragons />
                </PrivateContent>
              } />

              <Route path="/dragon" exact element={
                <PrivateContent>
                  <CreateDragon />
                </PrivateContent>
              } />

              <Route path="/dragon/:dragonId" exact element={
                <PrivateContent>
                  <Dragon />
                </PrivateContent>
              } />

            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;