import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ModalHeader } from '../../../components';
import { changeModal } from '../../../modules/modal/modal';

const ModalHeaderContainer = ({ modalTitle, modalIcon }) => {
  const dispatch = useDispatch();
  const onChangeModal = useCallback((modalType) => {
    dispatch(changeModal(modalType));
  }, []);
  return (
    <div>
      <ModalHeader
        modalTitle={modalTitle}
        modalIcon={modalIcon}
        onChangeModal={onChangeModal}
      />
    </div>
  );
};

export default ModalHeaderContainer;
