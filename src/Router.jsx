import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Router = () => (
  <Switch>
    <Route exact path="/" component={() => <div>메인임</div>} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
