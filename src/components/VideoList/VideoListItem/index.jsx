import React, { useState } from 'react';

import * as S from './style';
import * as Icon from '../../../assets';

const VideoListItem = ({ url, title, count }) => {
  const [isHover, setIsHover] = useState(false);
  const videoThumbnail = `http://img.youtube.com/vi/${url}/hqdefault.jpg`;

  return (
    <S.VideoItemWrapper
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && (
        <S.VideoHover>
          <S.VideoHoverIcon src={Icon.feed.play_btn} />
        </S.VideoHover>
      )}
      <S.VideoThumbnail src={videoThumbnail} />
      <S.VideoInfo>
        <S.VideoInfoWrapper>
          <S.VideoName>{title}</S.VideoName>
          <S.VideoViewCount>조회수 {count}</S.VideoViewCount>
        </S.VideoInfoWrapper>
      </S.VideoInfo>
    </S.VideoItemWrapper>
  );
};

export default VideoListItem;
