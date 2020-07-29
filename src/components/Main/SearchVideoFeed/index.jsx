import React from 'react';

import * as S from './style';
import * as Icon from '../../../assets';
import VideoType from '../../Atoms/VideoType';
import VideoList from '../../Atoms/VideoList';

const SearchVideoFeed = ({ getSubtitledVideo, getRequestedVideos }) => {
  return (
    <S.SearchVideoFeedWrapper>
      <VideoType
        videoType="검색된 영상"
        videoTypeIcon={Icon.feed.searched_video}
      />
      <S.SearchVideoListWrapper>
        <VideoType videoType="자막이 작성된 영상" />
        {getSubtitledVideo()}
      </S.SearchVideoListWrapper>
      <S.SearchVideoListWrapper>
        <VideoType
          videoType="자막을 기다리는 영상"
          videoTypeIcon={Icon.feed.wait_video}
        />
        {getRequestedVideos()}
      </S.SearchVideoListWrapper>
    </S.SearchVideoFeedWrapper>
  );
};

export default SearchVideoFeed;
