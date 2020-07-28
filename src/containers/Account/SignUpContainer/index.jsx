import React from 'react';

import {SignUp, AccountWrapper} from '../../../components'

const SignUpContainer = () => {
  return (
    <div>
        <AccountWrapper accountContent={<SignUp/>}/>     
    </div>
  );
};

export default SignUpContainer;