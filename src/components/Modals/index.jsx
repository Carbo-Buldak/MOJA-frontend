import React from 'react';

import * as S from './style';
import Apply from '../Apply';

const Modal = (modalType) => {
  const switchModal = (modalType) => {
    switch (modalType.modalType) {
      case 'apply':
        return (
          <>
            <Apply />
            <S.ModalOverlay />
          </>
        );
      default:
        return null;
    }
  };
  return <>{switchModal(modalType)}</>;
};

export default Modal;
