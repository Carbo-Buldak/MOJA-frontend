import React from 'react';

import * as S from './style';
import VideoListItem from './VideoListItem/index';

const VideoList = ({ videoListData, getSelectedVideoUrl }) => {
  return (
    <>
      {videoListData !== null && (
        <S.VideoListWrapper>
          {videoListData.length > 0 ? (
            videoListData.map((video) => (
              <VideoListItem
                key={video.url}
                url={video.url}
                title={video.title}
                count={video.count}
                getSelectedVideoUrl={getSelectedVideoUrl}
              />
            ))
          ) : (
            <div>영상이 없어요</div>
          )}
        </S.VideoListWrapper>
      )}
    </>
  );
};

export default VideoList;
