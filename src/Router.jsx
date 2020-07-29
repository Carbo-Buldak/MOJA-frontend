import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  MainContainer,
  PopularVideoContainer,
  WaitingVideoContainer,
  SearchVideoFeedContainer,
  WriteSubtitleContainer,
  ViewSubtitleContainer,
  LoginContainer,
  SignUpContainer,
  MypageContainer,
} from './containers';

const Router = () => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Route path="/popularVideo" component={PopularVideoContainer} />
    <Route path="/waitingVideo" component={WaitingVideoContainer} />
    <Route path="/writeSubtitle" component={WriteSubtitleContainer} />
    <Route path="/viewSubtitle" component={ViewSubtitleContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/mypage" component={MypageContainer} />
    <Route path="/search" component={SearchVideoFeedContainer} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
