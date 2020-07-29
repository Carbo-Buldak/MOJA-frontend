import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { VideoFeed } from '../../../components';
import { getSelectedVideoUrl } from '../../../modules/video/video';
import { getPopularVideo } from '../../../modules/videoList/popularVideo/popularVideo';
import { getVideoListReq } from '../../../lib/api';

const PopularVideoContainer = ({
  sorting,
  videoListData,
  getSelectedVideoUrl,
  getPopularVideoList,
}) => {
  const history = useHistory();
  const getPopularSelectedVideoUrl = (videoUrl, videoTitle) => {
    getSelectedVideoUrl(videoUrl, videoTitle);
    history.push('/viewSubtitle');
  };

  useEffect(() => {
    console.log(sorting);
    getVideoListReq('', sorting, 0, 100)
      .then((videoList) => getPopularVideoList(videoList))
      .catch((e) => console.log(e));
  }, [sorting]);

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
  return {
    videoListData: state.popularVideo.videoList,
    sorting: state.videoSort.sorting,
  };
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
)(PopularVideoContainer);
