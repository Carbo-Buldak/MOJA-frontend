import React from 'react';

import * as S from './style';

const VideoCategoryItem = ({ categoryItem, getSelectedCategoryItem }) => {
  return (
    <S.VideoCategoryItemWrapper
      onClick={() => getSelectedCategoryItem(categoryItem)}
    >
      <S.VideoCategoryItemName>{categoryItem}</S.VideoCategoryItemName>
    </S.VideoCategoryItemWrapper>
  );
};

export default VideoCategoryItem;
