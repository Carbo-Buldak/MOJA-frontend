import React from 'react';

import * as S from './style';
const UserInfo = ({ userInfoItemType, userInfoItem }) => {
  return (
    <div>
      <S.UserInfoItemWrapper>
        <S.UserInfoName>{userInfoItemType}</S.UserInfoName>
        <S.UserInfo>{userInfoItem}</S.UserInfo>
      </S.UserInfoItemWrapper>
    </div>
  );
};

export default UserInfo;
