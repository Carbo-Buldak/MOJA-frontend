import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Header } from '../../../components';
import { changeModal } from '../../../modules/modal/modal';

const HeaderContainer = ({ visibility, onChangeModal }) => {
  const token = localStorage.getItem('token');
  const [isLogin, setIsLogin] = useState(false);

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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeModal: (modalType) => dispatch(changeModal(modalType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
