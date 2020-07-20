import React from 'react';

import * as S from './style';
import VideoCategoryItem from '../VideoCategoryItem';

const VideoCategoryList = ({
  width,
  isPopularVideo,
  isVisible,
  getSelectedCategoryItem,
}) => {
  return (
    <S.VideoCategoryList width={width} isVisible={isVisible}>
      <S.CategoryTopBottomWrapper isTop={true} />
      <VideoCategoryItem
        categoryItem="최신순"
        getSelectedCategoryItem={getSelectedCategoryItem}
      />
      {isPopularVideo ? (
        <VideoCategoryItem
          categoryItem="조회수순"
          getSelectedCategoryItem={getSelectedCategoryItem}
        />
      ) : (
        <VideoCategoryItem
          categoryItem="요청순"
          getSelectedCategoryItem={getSelectedCategoryItem}
        />
      )}
      <S.CategoryTopBottomWrapper isTop={false} />
    </S.VideoCategoryList>
  );
};

export default VideoCategoryList;
