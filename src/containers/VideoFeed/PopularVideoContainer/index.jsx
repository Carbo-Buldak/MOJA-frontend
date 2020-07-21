import React from 'react';
import { connect } from 'react-redux';
import { VideoFeed } from '../../../components';

const PopularVideoContainer = ({ videoListData }) => {
  return (
    <div>
      <VideoFeed videoType={1} videoListData={videoListData} />
    </div>
  );
};

export default connect((state) => ({
  videoListData: state.popularVideo.videoList,
}))(PopularVideoContainer);
