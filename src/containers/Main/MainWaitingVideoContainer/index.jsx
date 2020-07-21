import React from 'react';
import { connect } from 'react-redux';

import { MainVideoList } from '../../../components';

const MainWaitingVideoContainer = ({ videoListData }) => {
  return <MainVideoList videoType={0} videoListData={videoListData} />;
};

export default connect((state) => ({
  videoListData: state.waitingVideo.videoList,
}))(MainWaitingVideoContainer);
