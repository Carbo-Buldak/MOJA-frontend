import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { MainVideoList } from '../../../components';
import { getSelectedVideoUrl } from '../../../modules/video/video';
import { getPopularVideo } from '../../../modules/videoList/popularVideo/popularVideo';
import { getVideoListReq } from '../../../lib/api';

const MainPopularVideoContainer = ({
  videoListData,
  getSelectedVideoUrl,
  getPopularVideoList,
}) => {
  const history = useHistory();
  const getPopularSelectedVideoUrl = (videoUrl, videoTitle) => {
    console.log(videoUrl, videoTitle);
    getSelectedVideoUrl(videoUrl, videoTitle);
    history.push('/viewSubtitle');
  };

  useEffect(() => {
    getVideoListReq(0, 'count', 0, 8)
      .then((videoList) => getPopularVideoList(videoList))
      .catch((e) => console.log(e));
  }, []);

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
    getPopularVideoList: (videoList) => dispatch(getPopularVideo(videoList)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPopularVideoContainer);
