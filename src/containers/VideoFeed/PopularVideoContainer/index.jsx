import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { VideoFeed } from '../../../components';
import { getSelectedVideoUrl } from '../../../modules/video/video';

const PopularVideoContainer = ({ videoListData, getSelectedVideoUrl }) => {
  const history = useHistory();
  const getPopularSelectedVideoUrl = (videoUrl, videoTitle) => {
    getSelectedVideoUrl(videoUrl, videoTitle);
    history.push('/viewSubtitle');
  };

  return (
    <div>
      <VideoFeed
        videoType={1}
        videoListData={videoListData}
        getSelectedVideoUrl={getPopularSelectedVideoUrl}
      />
    </div>
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
)(PopularVideoContainer);
