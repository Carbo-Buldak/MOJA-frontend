import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Icon from '../../assets/index';
import * as S from './style';
import { DefaultButton } from '../../GlobalStyle';
import { SearchVideoContainer } from '../../containers';
import SearchVideo from './SearchVideo/index';
import UserProfile from './UserProfile/index';

const Header = ({ changeModal, isLogin, handleLogOut, userName }) => {
  console.log(userName);
  return (
    <S.HeaderWrapper>
      <S.HeaderImmutableContent>
        <Link to="/">
          <S.Logo src={Icon.logo.moja} />
        </Link>
        <SearchVideoContainer />
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
            {/* <UserProfile userName={userName} /> */}
            <S.GoMypageButton>마이페이지 가기</S.GoMypageButton>
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
