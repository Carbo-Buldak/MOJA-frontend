import React from 'react';
import { connect } from 'react-redux';

import { VideoCategory } from '../../../components';
import { changeVideoSorting } from '../../../modules/videoSort/videoSort';

const CategoryContainer = ({
  categoryName,
  width,
  changeVideoSorting,
  isPopularVideo,
  sorting,
}) => {
  const handleChangeVideoSorting = (sortingStatus) => {
    changeVideoSorting(sortingStatus);
    console.log(changeVideoSorting(sortingStatus));
    console.log(`sorting ${sortingStatus}`);
  };
  return (
    <div>
      <VideoCategory
        categoryName={categoryName}
        width={width}
        isPopularVideo={isPopularVideo}
        changeVideoSorting={handleChangeVideoSorting}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sorting: state.videoSort.sorting,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    changeVideoSorting: (sortingStatus) =>
      dispatch(changeVideoSorting(sortingStatus)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
