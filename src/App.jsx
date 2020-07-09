import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Router from './Router';
import { Header, Footer } from './components/index';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
