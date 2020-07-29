import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { VideoFeed } from '../../../components';
import { getVideoListReq } from '../../../lib/api';
import { getSelectedVideoUrl } from '../../../modules/video/video';
import { getWaitingVideo } from '../../../modules/videoList/waitingVideo/waitingVideo';

const WaitingVideoContainer = ({
  sorting,
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
    getVideoListReq(`status=${0}`, sorting, 0, 100)
      .then((videoList) => {
        getWaitingVideo(videoList);
        console.log(videoList);
      })
      .catch((e) => console.log(e));
  }, [sorting]);

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
  return {
    videoListData: state.waitingVideo.videoList,
    sorting: state.videoSort.sorting,
  };
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
)(WaitingVideoContainer);
