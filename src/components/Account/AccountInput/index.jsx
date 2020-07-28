import React from 'react';

import * as S from './style'

const AccountInput = ({inputName, type}) => {
  return (
    <S.AccountInputWrapper>
      <S.AccountInputName>{inputName}</S.AccountInputName>
      <S.AccountInput type={type}/>
    </S.AccountInputWrapper>
  );
};

export default AccountInput;