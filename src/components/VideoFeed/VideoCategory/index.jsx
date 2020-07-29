import React, { useState } from 'react';

import * as S from './style';
import VideoCategoryList from './VideoCategoryList';

const VideoCategory = ({
  categoryName,
  width,
  isPopularVideo,
  changeVideoSorting,
}) => {
  const [selectedItem, setSelectedItem] = useState('최신순');
  const [isVisible, setIsVisible] = useState(false);

  const mapCategoryToSortingStatus = (selectedItem) => {
    if (selectedItem === '최신순') {
      console.log(`selectedItem ${selectedItem}`);
      return 'date';
    } else if (selectedItem === '조회수순' || '요청수') {
      console.log(`selectedItem ${selectedItem}`);
      return 'count';
    }
  };

  const getSelectedCategoryItem = (selectedItem) => {
    setSelectedItem(selectedItem);
    console.log(selectedItem);
    changeVideoSorting(mapCategoryToSortingStatus(selectedItem));
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
