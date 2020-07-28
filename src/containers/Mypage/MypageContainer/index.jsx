import React from 'react';
import { connect } from 'react-redux';

import { Mypage } from '../../../components';
import { getSelectedVideoUrl } from '../../../modules/video/video';
import { getSavedSubtitleList } from '../../../modules/writeSubtitle/writeSubtitle';

const MypageContainer = ({
  userData,
  getSelectedVideoUrl,
  getSavedSubtitleList,
}) => {
  return (
    <div>
      <Mypage
        userData={userData}
        getSelectedVideoUrl={getSelectedVideoUrl}
        getSavedSubtitleList={getSavedSubtitleList}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.mypage.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedVideoUrl: (videoUrl, videoTitle) =>
      dispatch(getSelectedVideoUrl(videoUrl, videoTitle)),

    getSavedSubtitleList: (subtitleList) =>
      dispatch(getSavedSubtitleList(subtitleList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MypageContainer);
