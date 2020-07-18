import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../../modules';

import { Modal } from '../../../components';

const ModalContainer = () => {
  const modalType = useSelector((state) => state.modal.modalType);
  console.log(modalType);
  return (
    <div>
      <Modal modalType={modalType} />
    </div>
  );
};

export default ModalContainer;
