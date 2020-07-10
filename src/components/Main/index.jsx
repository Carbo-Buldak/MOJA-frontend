import React from 'react';

import * as S from './style';
import { PopularVideoContainer, WaitingVideoContainer } from '../../containers';

const Main = () => {
  return (
    <S.MainWrapper>
      <PopularVideoContainer />
      <WaitingVideoContainer />
    </S.MainWrapper>
  );
};

export default Main;
