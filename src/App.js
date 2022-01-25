import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateContent } from './components';
import { GlobalContextProvider } from './contexts';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route path="/login" exact element={<div>login</div>} />

          <Route path="/" exact element={<PrivateContent><div>root</div></PrivateContent>} />

          <Route path="dragons/:dragonId" exact element={<PrivateContent><div>dragão</div></PrivateContent>} />

        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;