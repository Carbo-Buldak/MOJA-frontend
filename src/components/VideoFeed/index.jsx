import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import * as Icon from '../../assets';
import VideoType from '../Atoms/VideoType';
import VideoCategory from './VideoCategory';
import VideoList from '../Atoms/VideoList';

const VideoFeed = ({ videoType, videoListData, getSelectedVideoUrl }) => {
  return (
    <S.VideoFeedWrapper>
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
        <VideoCategory
          categoryName="정렬"
          width=" 8.688rem"
          isPopularVideo={true}
        />
        {videoType === 0 ? (
          <Link to="/popularVideo">
            <S.MoveOtherVideoBtn>인기영상 보러가기</S.MoveOtherVideoBtn>
          </Link>
        ) : (
          <Link to="/waitingVideo">
            <S.MoveOtherVideoBtn>
              자막을 기다리는 영상 보러가기
            </S.MoveOtherVideoBtn>
          </Link>
        )}
        <VideoList
          videoListData={videoListData}
          getSelectedVideoUrl={getSelectedVideoUrl}
        />
      </S.MainVideoListWrapper>
    </S.VideoFeedWrapper>
  );
};

export default VideoFeed;
