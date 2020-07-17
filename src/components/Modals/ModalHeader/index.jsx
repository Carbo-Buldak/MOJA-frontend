import React from 'react';

import * as S from './style';
import * as Icon from '../../../assets';

const ModalHeader = ({ modalTitle, modalIcon }) => {
  return (
    <S.ModalHeaderWrapper>
      <S.ModalHeaderTitle>
        <S.ModalName>{modalTitle}</S.ModalName>
        <S.ModalIcon src={modalIcon} />
      </S.ModalHeaderTitle>
      <S.ModalCloseButton src={Icon.modal.close_btn} />
    </S.ModalHeaderWrapper>
  );
};

export default ModalHeader;
