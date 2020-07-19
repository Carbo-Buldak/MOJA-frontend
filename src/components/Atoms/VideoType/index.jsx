import React from 'react';

import * as S from './style';

const VideoType = ({ videoType, videoTypeIcon }) => {
  return (
    <S.VideoTypeWrapper>
      <S.VideoType>{videoType}</S.VideoType>
      <S.VideoTypeIcon src={videoTypeIcon} />
    </S.VideoTypeWrapper>
  );
};

export default VideoType;
