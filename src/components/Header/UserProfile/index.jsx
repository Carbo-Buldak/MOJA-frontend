import React from 'react';

import * as S from './style';

const UserProfile = () => {
  return (
    <S.UserProfileWrapper>
      <S.UserName>가나다라</S.UserName>
      <S.UserProfilePhoto src="https://t1.daumcdn.net/liveboard/animaldaily/877a59c9d86042efa38a0e8d40651a93.JPG" />
    </S.UserProfileWrapper>
  );
};

export default UserProfile;
