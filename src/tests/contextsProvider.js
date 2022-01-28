import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query'

import { queryClient } from '../clients/queryClient';
import { GlobalContextProvider } from '../contexts';
import ThemeProvider from '../styles/themeProvider';

const Provider = ({ children }) => (
  <BrowserRouter>
    <GlobalContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </GlobalContextProvider>
  </BrowserRouter>
);

export default Provider;