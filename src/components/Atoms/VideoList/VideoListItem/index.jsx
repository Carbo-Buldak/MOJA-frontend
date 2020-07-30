import React, { useState } from 'react';

import * as S from './style';
import * as Icon from '../../../../assets';

const VideoListItem = React.memo(
  ({ url, title, count, getSelectedVideoUrl, isSubtitledVideo }) => {
    const [isHover, setIsHover] = useState(false);
    const videoThumbnail = `http://img.youtube.com/vi/${url}/hqdefault.jpg`;

    const getSelectedUrl = () => {
      // console.log(title);
      getSelectedVideoUrl(url, title);
    };
    return (
      <S.VideoItemWrapper
        onClick={getSelectedUrl}
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
            <S.VideoViewCount>
              {isSubtitledVideo ? '조회수' : '요청수'} {count}
            </S.VideoViewCount>
          </S.VideoInfoWrapper>
        </S.VideoInfo>
      </S.VideoItemWrapper>
    );
  },
);

export default VideoListItem;
