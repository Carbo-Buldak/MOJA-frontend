import React from 'react';
import { connect } from 'react-redux';

import { MainVideoList } from '../../../components';

const MainPopularVideoContainer = ({ videoListData }) => {
  return <MainVideoList videoType={2} videoListData={videoListData} />;
};

export default connect((state) => ({
  videoListData: state.popularVideo.videoList,
}))(MainPopularVideoContainer);
