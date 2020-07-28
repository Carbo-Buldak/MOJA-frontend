import React from 'react';
import { useHistory } from 'react-router';

import * as S from './style';
import * as Icon from '../../assets';
import UserInfo from './UserInfo';
import MypageVideo from './MypageVideo';
import VideoType from '../Atoms/VideoType';

const Mypage = ({ userData, getSelectedVideoUrl, getSavedSubtitleList }) => {
  const history = useHistory();

  const getSubtitledVideosUrl = (videoUrl, videoTitle) => {
    getSelectedVideoUrl(videoUrl, videoTitle);
    history.push('/viewSubtitle');
  };

  const getSavedSubtitleWithUrl = (videoUrl) => {
    const subtitle = userData.subtitling_videos.filter((videoItem) => {
      return videoItem.url === videoUrl;
    });

    getSavedSubtitleList(subtitle[0].subtitles);
    console.log('subtitle', subtitle[0].subtitles);
  };
  const getSubtitlingVideoUrl = (videoUrl, videoTitle) => {
    getSelectedVideoUrl(videoUrl, videoTitle);
    getSavedSubtitleWithUrl(videoUrl);
    console.log(userData.subtitling_videos);
    history.push('/writeSubtitle');
  };

  const getRequestedVideosUrl = (videoUrl, videoTitle) => {
    getSelectedVideoUrl(videoUrl, videoTitle);

    history.push('/viewSubtitle');
  };

  return (
    <S.MypageWrapper>
      <VideoType videoType="마이페이지" videoTypeIcon={Icon.mypage.user_icon} />
      <S.UserInfoWrapper>
        <UserInfo userInfoItemType="이메일" userInfoItem={userData.email} />
        <UserInfo userInfoItemType="닉네임" userInfoItem={userData.nickname} />
        <UserInfo
          userInfoItemType="포인트"
          userInfoItem={`${userData.point}p`}
        />
      </S.UserInfoWrapper>
      <MypageVideo
        videoType="자막을 작성중인 영상"
        videoList={userData.subtitling_videos}
        getSelectedVideoUrl={getSubtitlingVideoUrl}
      />
      <MypageVideo
        videoType="자막을 작성한 영상"
        videoList={userData.subtitled_videos}
        getSelectedVideoUrl={getSubtitledVideosUrl}
      />
      <MypageVideo
        videoType="자막을 자막을 요청한 영상"
        videoList={userData.requested_videos}
        getSelectedVideoUrl={getSelectedVideoUrl}
      />
    </S.MypageWrapper>
  );
};

export default Mypage;
