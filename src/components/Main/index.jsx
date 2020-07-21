import React from 'react';

import * as S from './style';
import {
  MainPopularVideoContainer,
  MainWaitingVideoContainer,
} from '../../containers';

const Main = () => {
  return (
    <S.MainWrapper>
      <MainPopularVideoContainer />
      <MainWaitingVideoContainer />
    </S.MainWrapper>
  );
};

export default Main;
