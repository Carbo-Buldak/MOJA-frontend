import React from 'react';
import { connect } from 'react-redux';

import { VideoFeed } from '../../../components';

const WaitingVideoContainer = ({ videoListData }) => {
  return (
    <div>
      <VideoFeed videoType={0} videoListData={videoListData} />
    </div>
  );
};

export default connect((state) => ({
  videoListData: state.waitingVideo.videoList,
}))(WaitingVideoContainer);
