import React from 'react';

import * as S from './style';
import * as Icon from '../../../assets';
import VideoList from '../../Atoms/VideoList';
import VideoType from '../../Atoms/VideoType';

const MainVideoList = ({ videoType, videoListData }) => {
  return (
    <S.MainVideoListWrapper>
      {videoType === 0 ? (
        <VideoType
          videoType="자막을 기다리는 영상"
          videoTypeIcon={Icon.feed.wait_video}
        />
      ) : (
        <VideoType
          videoType="인기 영상"
          videoTypeIcon={Icon.feed.popular_video}
        />
      )}
      <S.ShowMoreVideosBtn>더보기</S.ShowMoreVideosBtn>
      <VideoList videoListData={videoListData} />
    </S.MainVideoListWrapper>
  );
};

export default MainVideoList;
