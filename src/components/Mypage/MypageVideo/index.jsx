import React from 'react';

import * as S from './style';
import VideoList from '../../Atoms/VideoList';

const MypageVideo = ({ videoType, videoList, getSelectedVideoUrl }) => {
  return (
    <S.MypageVideoWrapper>
      <S.VideoTypeName>{videoType}</S.VideoTypeName>
      <VideoList
        videoListData={videoList}
        getSelectedVideoUrl={getSelectedVideoUrl}
      />
    </S.MypageVideoWrapper>
  );
};

export default MypageVideo;
