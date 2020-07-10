import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MainContainer } from './containers';

const Router = () => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
