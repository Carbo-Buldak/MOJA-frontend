import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Router from './Router';
import { Footer } from './components';
import { HeaderContainer, ModalContainer } from './containers';

const App = () => {
  return (
    <BrowserRouter>
      <ModalContainer />
      <HeaderContainer />
      <Router />
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
