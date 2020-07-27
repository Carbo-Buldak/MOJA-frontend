import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  MainContainer,
  PopularVideoContainer,
  WaitingVideoContainer,
  WriteSubtitleContainer,
  ViewSubtitleContainer,
} from './containers';

const Router = () => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Route path="/popularVideo" component={PopularVideoContainer} />
    <Route path="/waitingVideo" component={WaitingVideoContainer} />
    <Route path="/writeSubtitle" component={WriteSubtitleContainer} />
    <Route path="/viewSubtitle" component={ViewSubtitleContainer} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
