import React from 'react';

import * as S from './style'

const AccountInput = ({inputName, type, value, changeValue}) => {
  return (
    <S.AccountInputWrapper>
      <S.AccountInputName>{inputName}</S.AccountInputName>
      <S.AccountInput type={type} value={value} onChange={changeValue}/>
    </S.AccountInputWrapper>
  );
};

export default AccountInput;