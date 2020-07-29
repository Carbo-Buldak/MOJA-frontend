import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Login, AccountWrapper } from '../../../components';
import { logInRequest } from '../../../lib/api';
import { logIn } from '../../../modules/auth/auth';

const LoginContainer = ({ logIn }) => {
  const history = useHistory();

  const getLoginParams = (loginParams) => {
    console.log(loginParams);
    logInRequest(loginParams)
      .then(() => {
        alert('로그인에 성공하였습니다');
        history.push('/');
      })
      .catch(() => alert('로그인에 실패하였습니다'));
  };

  return (
    <div>
      <AccountWrapper
        accountContent={<Login getLoginParams={getLoginParams} />}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (loginParams) => dispatch(logIn(loginParams)),
  };
};
export default connect(null, mapDispatchToProps)(LoginContainer);
