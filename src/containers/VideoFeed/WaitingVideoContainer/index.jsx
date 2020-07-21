import React from 'react';

import { VideoFeed } from '../../../components';

const WaitingVideoContainer = () => {
  const videoListDummy = {
    videos: [
      {
        title: '[제국의 아이들 ZEA] - 바람의 유령 @인기가요 130811',
        url: 'Kv83It4ELHM ',
        status: 1,
        requested_date: '2020-05-17T15:00:00.000+00:00',
        count: 517009,
      },
    ],
  };
  return (
    <div>
      <VideoFeed videoType={0} videoListData={videoListDummy} />
    </div>
  );
};

export default WaitingVideoContainer;
