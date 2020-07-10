import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Router from './Router';
import { Footer } from './components';
import { HeaderContainer } from './containers';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeaderContainer />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
