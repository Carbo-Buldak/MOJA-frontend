import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { MainVideoList } from '../../../components';
import { getSelectedVideoUrl } from '../../../modules/video/video';

const MainPopularVideoContainer = ({ videoListData, getSelectedVideoUrl }) => {
  const history = useHistory();
  const getPopularSelectedVideoUrl = (videoUrl, videoTitle) => {
    console.log(videoUrl, videoTitle);
    getSelectedVideoUrl(videoUrl, videoTitle);
    history.push('/');
  };

  return (
    <MainVideoList
      videoType={2}
      videoListData={videoListData}
      getSelectedVideoUrl={getPopularSelectedVideoUrl}
    />
  );
};

const mapStateToProps = (state) => {
  return { videoListData: state.popularVideo.videoList };
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
)(MainPopularVideoContainer);
