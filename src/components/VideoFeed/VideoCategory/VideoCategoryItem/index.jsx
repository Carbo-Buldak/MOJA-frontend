import React from 'react';

import * as S from './style';

const VideoCategoryItem = ({ categoryItem, getSelectedCategoryItem }) => {
  const getSelectedCategory = () => {
    console.log(`categoryItem ${categoryItem}`);
    getSelectedCategoryItem(categoryItem);
  };

  return (
    <S.VideoCategoryItemWrapper onClick={getSelectedCategory}>
      <S.VideoCategoryItemName>{categoryItem}</S.VideoCategoryItemName>
    </S.VideoCategoryItemWrapper>
  );
};

export default VideoCategoryItem;
