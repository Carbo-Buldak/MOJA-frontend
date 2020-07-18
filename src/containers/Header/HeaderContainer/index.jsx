import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from '../../../components';
import { changeModal } from '../../../modules/modal/modal';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const onChangeModal = useCallback(
    (modalType) => dispatch(changeModal(modalType)),
    [dispatch],
  );
  return <Header changeModal={onChangeModal} />;
};

export default HeaderContainer;
