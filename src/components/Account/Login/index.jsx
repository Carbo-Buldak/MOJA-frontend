import React from 'react';
import {Link} from 'react-router-dom'

import * as S from './style'
import AccountInput from '../AccountInput'

const Login = () => {
    return (
      <S.LoginWrapper>
        <S.LoginContentWrapper>
            <div>
                <AccountInput inputName="아이디"/>
                <AccountInput inputName="비밀번호" type="password" />
            </div>
            <S.ApplyLoginButton>로그인</S.ApplyLoginButton>
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