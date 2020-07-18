import React from 'react';

import * as Icon from '../../assets/index';
import * as S from './style';
import { DefaultButton } from '../../GlobalStyle';
import SearchVideo from './SearchVideo/index';
import UserProfile from './UserProfile/index';

const Header = ({ changeModal }) => {
  const isLogin = true;
  return (
    <S.HeaderWrapper>
      <S.HeaderImmutableContent>
        <S.Logo src={Icon.logo.moja} />
        <SearchVideo />
      </S.HeaderImmutableContent>
      {isLogin ? (
        <>
          <DefaultButton
            width="7.25rem"
            height="2.5rem"
            fontSize="1rem"
            onClick={() => changeModal('apply')}
          >
            자막 요청하기
          </DefaultButton>
          <UserProfile />
        </>
      ) : (
        <S.goLoginButton>로그인</S.goLoginButton>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
