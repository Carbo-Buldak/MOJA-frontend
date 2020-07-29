import React from 'react';

import * as Icon from '../../assets/index';
import * as S from './style';
import { DefaultButton } from '../../GlobalStyle';
import SearchVideo from './SearchVideo/index';
import UserProfile from './UserProfile/index';
import { Link } from 'react-router-dom';

const Header = ({ changeModal, isLogin, handleLogOut }) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderImmutableContent>
        <Link to="/">
          <S.Logo src={Icon.logo.moja} />
        </Link>
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
          <Link to="/mypage">
            <UserProfile userName="김도마동망고" />
          </Link>
          <S.LogOutButton onClick={handleLogOut}>로그아웃하기</S.LogOutButton>
        </>
      ) : (
        <Link to="/login">
          <S.goLoginButton>로그인</S.goLoginButton>
        </Link>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
