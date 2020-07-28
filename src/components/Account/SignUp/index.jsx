import React from 'react';
import {Link} from 'react-router-dom'

import * as S from './style';
import AccountInput from '../AccountInput';

const SignUp = () => {
  return (
    <div>
      <div>
        <AccountInput inputName="이메일"/>
        <AccountInput inputName="닉네임"/>
        <AccountInput inputName="비밀번호" type="password"/>
        <AccountInput inputName="비밀번호 확인" type="password"/>
      </div>
      <S.ApplySignUpButton>확인</S.ApplySignUpButton>
      <Link to="/">
        <S.GoToMainButton>메인으로</S.GoToMainButton>
      </Link>
    </div>
  );
};

export default SignUp;