import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SignUp, AccountWrapper } from '../../../components';
import { signUp } from '../../../modules/auth/auth';
import { signUpRequest } from '../../../lib/api';

const SignUpContainer = ({ signUp }) => {
  const history = useHistory();

  const getSignUpParams = (signUpParams) => {
    signUpRequest(signUpParams)
      .then(() => {
        alert('회원가입에 성공하였습니다. 로그인을 진행해주세요');
        history.push('/login');
      })
      .catch((e) => {
        if (e.response.status === 409) {
          alert('이미 있는 계정입니다');
        } else alert('회원가입에 실패하였습니다');
      });
  };
  return (
    <div>
      <AccountWrapper
        accountContent={<SignUp getSignUpParams={getSignUpParams} />}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (signUpParams) => dispatch(signUp(signUpParams)),
  };
};
export default connect(null, mapDispatchToProps)(SignUpContainer);
