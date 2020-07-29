import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import AccountInput from '../AccountInput';

const SignUp = ({ getSignUpParams }) => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeNickname = (e) => {
    setNickname(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeCheckPassword = (e) => {
    setCheckPassword(e.target.value);
  };

  const onGetSignUpParams = () => {
    if (password !== checkPassword) {
      alert('비밀번호가 다릅니다');
    } else {
      const signUpParams = {
        email,
        nickname,
        password,
      };
      getSignUpParams(signUpParams);
    }
  };

  return (
    <div>
      <div>
        <AccountInput
          inputName="이메일"
          value={email}
          changeValue={changeEmail}
        />
        <AccountInput
          inputName="닉네임"
          value={nickname}
          changeValue={changeNickname}
        />
        <AccountInput
          inputName="비밀번호"
          type="password"
          value={password}
          changeValue={changePassword}
        />
        <AccountInput
          inputName="비밀번호 확인"
          type="password"
          value={checkPassword}
          changeValue={changeCheckPassword}
        />
      </div>
      <S.ApplySignUpButton onClick={onGetSignUpParams}>
        확인
      </S.ApplySignUpButton>
      <Link to="/">
        <S.GoToMainButton>메인으로</S.GoToMainButton>
      </Link>
    </div>
  );
};

export default SignUp;
