import React from 'react';

import * as S from './style';
import * as Icon from '../../../assets';
import VideoList from '../../VideoList';

const MainVideoList = ({ videoType, videoListData }) => {
  return (
    <S.MainVideoListWrapper>
      {videoType === 0 ? (
        <S.VideoTypeWrapper>
          <S.VideoType>자막을 기다리는 영상</S.VideoType>
          <S.VideoTypeIcon src={Icon.feed.wait_video} />
        </S.VideoTypeWrapper>
      ) : (
        <S.VideoTypeWrapper>
          <S.VideoType>인기영상</S.VideoType>
          <S.VideoTypeIcon src={Icon.feed.popular_video} />
        </S.VideoTypeWrapper>
      )}
      <S.ShowMoreVideosBtn>더보기</S.ShowMoreVideosBtn>
      <VideoList videoListData={videoListData} />
    </S.MainVideoListWrapper>
  );
};

export default MainVideoList;
