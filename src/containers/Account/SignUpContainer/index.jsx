import React from 'react';
import {connect} from 'react-redux'

import {SignUp, AccountWrapper} from '../../../components'
import {signUp} from '../../../modules/auth/auth'

const SignUpContainer = ({signUp}) => {

  const getSignUpParams=(signUpParams)=>{
    signUp(signUpParams)
    // console.log(signUpParams)
  }
  return (
    <div>
        <AccountWrapper accountContent={<SignUp getSignUpParams={getSignUpParams}/>} />     
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     null
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (signUpParams) => dispatch(signUp(signUpParams))
  };
};
export default connect(null, mapDispatchToProps)(SignUpContainer);