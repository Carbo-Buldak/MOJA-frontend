import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Router from './Router';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;
