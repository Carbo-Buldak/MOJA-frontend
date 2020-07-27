import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { VideoFeed } from '../../../components';
import { getSelectedVideoUrl } from '../../../modules/video/video';

const WaitingVideoContainer = ({ videoListData, getSelectedVideoUrl }) => {
  const history = useHistory();
  const getWaitingSelectedVideoUrl = (videoUrl, videoTitle) => {
    getSelectedVideoUrl(videoUrl, videoTitle);
    history.push('/writeSubtitle');
  };
  return (
    <div>
      <VideoFeed
        videoType={0}
        videoListData={videoListData}
        getSelectedVideoUrl={getWaitingSelectedVideoUrl}
      />
    </div>
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
)(WaitingVideoContainer);
