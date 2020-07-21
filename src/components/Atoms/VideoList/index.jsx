import React from 'react';

import * as S from './style';
import VideoListItem from './VideoListItem/index';

const VideoList = ({ videoListData }) => {
  return (
    <S.VideoListWrapper>
      {videoListData != null ? (
        videoListData.map((video) => (
          <VideoListItem
            url={video.url}
            title={video.title}
            count={video.count}
          />
        ))
      ) : (
        <div>영상이 없어요</div>
      )}
    </S.VideoListWrapper>
  );
};

export default VideoList;
