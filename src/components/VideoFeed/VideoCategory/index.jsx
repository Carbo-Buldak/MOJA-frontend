import React, { useState } from 'react';

import * as S from './style';
import VideoCategoryList from './VideoCategoryList';

const VideoCategory = ({ categoryName, width, isPopularVideo }) => {
  const [selectedItem, setSelectedItem] = useState('최신순');
  const [isVisible, setIsVisible] = useState(false);

  const getSelectedCategoryItem = (selectedItem) => {
    setSelectedItem(selectedItem);
    setIsVisible(false);
  };

  const toggleCategoryList = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };
  return (
    <div>
      <S.VideoCategoryWrapper width={width} onClick={toggleCategoryList}>
        <S.CategoryName>{`${categoryName} · ${selectedItem}`}</S.CategoryName>
      </S.VideoCategoryWrapper>
      <VideoCategoryList
        width={width}
        getSelectedCategoryItem={getSelectedCategoryItem}
        isPopularVideo={isPopularVideo}
        isVisible={isVisible}
      />
    </div>
  );
};

export default VideoCategory;
