import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getUserDataReq } from '../../../lib/api';
import { Header } from '../../../components';
import { changeModal } from '../../../modules/modal/modal';
import { getUserData } from '../../../modules/mypage';

const HeaderContainer = ({
  userData,
  visibility,
  onChangeModal,
  getUserData,
}) => {
  const token = localStorage.getItem('token');
  const [isLogin, setIsLogin] = useState(false);
  const userName = 'userName';

  useEffect(() => {
    if (token !== null) {
      setIsLogin(true);
    } else setIsLogin(false);
  }, [token]);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    alert('로그아웃에 성공하였습니다');
    setIsLogin(false);
  };
  return (
    <>
      {visibility ? (
        <Header
          userName={userName}
          changeModal={onChangeModal}
          isLogin={isLogin}
          handleLogOut={handleLogOut}
        />
      ) : (
        <div />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    visibility: state.header.visibility,
    uerData: state.mypage.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeModal: (modalType) => dispatch(changeModal(modalType)),
    getUserData: (userData) => dispatch(getUserData(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
