import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { MainVideoList } from '../../../components';
import { getSelectedVideoUrl } from '../../../modules/video/video';

const MainWaitingVideoContainer = ({ videoListData, getSelectedVideoUrl }) => {
  const history = useHistory();
  const getWaitingSelectedVideoUrl = (videoUrl, videoTitle) => {
    getSelectedVideoUrl(videoUrl, videoTitle);
    history.push('/writeSubtitle');
  };

  return (
    <MainVideoList
      videoType={0}
      videoListData={videoListData}
      getSelectedVideoUrl={getWaitingSelectedVideoUrl}
    />
  );
};

const mapStateToProps = (state) => {
  return { videoListData: state.waitingVideo.videoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedVideoUrl: (videoUrl, videoTitle) =>
      dispatch(getSelectedVideoUrl(videoUrl, videoTitle)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainWaitingVideoContainer);
