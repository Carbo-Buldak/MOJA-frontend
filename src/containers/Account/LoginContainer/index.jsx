import React from 'react';
import {connect} from 'react-redux'

import {Login, AccountWrapper} from '../../../components';
import {logIn} from '../../../modules/auth/auth';

const LoginContainer = ({logIn}) => {

  const getLoginParams = (loginParams) => {
    console.log(loginParams);
    logIn(loginParams)
  }

  return (
    <div>
        <AccountWrapper accountContent={<Login getLoginParams={getLoginParams}/>}/>      
    </div>
    );
};


const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (loginParams) => dispatch(logIn(loginParams))
  };
};
export default connect(null, mapDispatchToProps)(LoginContainer);