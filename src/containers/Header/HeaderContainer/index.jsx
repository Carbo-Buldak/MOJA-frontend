import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { Header } from '../../../components';
import { changeModal } from '../../../modules/modal/modal';

const HeaderContainer = ({ visibility ,onChangeModal}) => {
  return <>
    {visibility?
     <Header changeModal={onChangeModal} /> : <div/>
    }
  </> ;
};


const mapStateToProps = (state) => {
  return {
    visibility: state.header.visibility
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeModal: (modalType) => dispatch(changeModal(modalType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
