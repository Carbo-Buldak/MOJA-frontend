import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

import * as S from './style';
import * as Icons from '../../assets';
import VideoType from '../Atoms/VideoType';
import setTimeToString from '../../utils/setTimeToString';

const ViewSubtitle = ({
  url,
  title,
  videoInfo,
  handleDuration,
  handleProgress,
  nowSubtitle,
  nextSubtitle,
}) => {
  const videoRef = useRef(null);
  console.log(nextSubtitle === null);
  const videoUrl = `https://www.youtube.com/watch?v=${url}`;
  return (
    <S.ViewSubtitleWrapper>
      <VideoType videoType="자막 보기" videoTypeIcon={Icons.writing.write} />
      <ReactPlayer
        width="56.25rem"
        height="31.63rem"
        ref={videoRef}
        url={videoUrl}
        controls={true}
        onDuration={handleDuration}
        onProgress={handleProgress}
      />
      <S.VideoTitle>{title}</S.VideoTitle>

      {videoInfo.subtitles.length > 0 ? (
        <>
          <S.NowSubtitleWrapper>
            <S.Subtitle>{setTimeToString(nowSubtitle.playedTime)}</S.Subtitle>
            <S.Subtitle>{nowSubtitle.subtitle}</S.Subtitle>
          </S.NowSubtitleWrapper>
          {nextSubtitle !== null ? (
            <S.NextSubtitleWrapper>
              <S.Subtitle>
                {setTimeToString(nextSubtitle.playedTime)}
              </S.Subtitle>
              <S.Subtitle>{nextSubtitle.subtitle}</S.Subtitle>
            </S.NextSubtitleWrapper>
          ) : (
            <div />
          )}
        </>
      ) : (
        <div>로딩중이에요</div>
      )}
    </S.ViewSubtitleWrapper>
  );
};

export default ViewSubtitle;
