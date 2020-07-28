import React from 'react';

import * as S from './style';

const UserProfile = ({ userName }) => {
  return (
    <S.UserProfileWrapper>
      <S.UserName>{userName}님</S.UserName>
    </S.UserProfileWrapper>
  );
};

export default UserProfile;
