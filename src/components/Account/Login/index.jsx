import React,{useState} from 'react';
import {Link} from 'react-router-dom'

import * as S from './style'
import AccountInput from '../AccountInput'

const Login = ({getLoginParams}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const onGetLoginParams = () => {
    if(email.length === 0 || password.length=== 0){
      alert("빈 칸이 없는지 확인해주세요")
    }else{
      const loginParams = {
        email,
        password
      }
      getLoginParams(loginParams)
  }
  }

    return (
      <S.LoginWrapper>
        <S.LoginContentWrapper>
            <div>
              <AccountInput inputName="이메일" value={email} changeValue={changeEmail} />
              <AccountInput inputName="비밀번호" type="password" value={password} changeValue={changePassword}/>
            </div>
            <S.ApplyLoginButton onClick={onGetLoginParams}>로그인</S.ApplyLoginButton>
         </S.LoginContentWrapper>
         <S.MoveToSignUpWrapper>
            <S.MoveToSignupText>아직 계정이 없으신가요?  </S.MoveToSignupText>
            <Link to="/signup">
              <S.MoveToSignupButton>회원가입</S.MoveToSignupButton>
            </Link>
        </S.MoveToSignUpWrapper>
      </S.LoginWrapper>
    );
};

export default Login;