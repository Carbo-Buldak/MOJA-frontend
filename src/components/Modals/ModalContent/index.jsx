import React from 'react';

import * as S from './style';

const ModalContent = ({ width, height, content }) => {
  return (
    <S.ModalContentWrapper width={width} height={height}>
      {content}
    </S.ModalContentWrapper>
  );
};

export default ModalContent;
