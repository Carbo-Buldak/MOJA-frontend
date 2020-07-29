import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { MainVideoList } from '../../../components';
import { getVideoListReq } from '../../../lib/api';
import { getSelectedVideoUrl } from '../../../modules/video/video';
import { getWaitingVideo } from '../../../modules/videoList/waitingVideo/waitingVideo';

const MainWaitingVideoContainer = ({
  videoListData,
  getSelectedVideoUrl,
  getWaitingVideo,
}) => {
  const history = useHistory();
  const getWaitingSelectedVideoUrl = (videoUrl, videoTitle) => {
    getSelectedVideoUrl(videoUrl, videoTitle);
    history.push('/writeSubtitle');
  };
  useEffect(() => {
    getVideoListReq(1, 'count', 0, 8)
      .then((videoList) => {
        getWaitingVideo(videoList);
        console.log(videoList);
      })
      .catch((e) => console.log(e));
  }, []);
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
    getWaitingVideo: (videoList) => dispatch(getWaitingVideo(videoList)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainWaitingVideoContainer);
