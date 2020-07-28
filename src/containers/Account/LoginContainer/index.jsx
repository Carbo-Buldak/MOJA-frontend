import React from 'react';

import {Login, AccountWrapper} from '../../../components'

const LoginContainer = () => {
    return (
        <div>
            <AccountWrapper accountContent={<Login/>}/>      
        </div>
    );
};

export default LoginContainer;