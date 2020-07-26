import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

import { DefaultButton } from '../../GlobalStyle';
import * as S from './style';
import * as Icons from '../../assets';
import VideoType from '../Atoms/VideoType';
import SubtitleList from './SubtitleList';

const WriteSubtitle = ({
  videoInfo,
  handleDuration,
  handleProgress,
  addSubtitleList,
  subtitleList,
  onApplySubtitleList,
}) => {
  const [subtitle, setSubtitle] = useState('');
  const videoRef = useRef(null);

  const videoUrl = `https://www.youtube.com/watch?v=${videoInfo.videoUrl}`;
  console.log(videoUrl);

  const changeSubtitle = (e) => {
    console.log(subtitle);
    setSubtitle(e.target.value);
  };

  const addSubtitle = () => {
    addSubtitleList(subtitle);
    setSubtitle('');
  };

  return (
    <S.WriteSubtitleWrapper>
      <VideoType
        videoType="자막 작성하기"
        videoTypeIcon={Icons.writing.write}
      />
      <ReactPlayer
        width="56.25rem"
        height="31.63rem"
        ref={videoRef}
        url={videoUrl}
        controls={true}
        onDuration={handleDuration}
        onProgress={handleProgress}
      />
      <S.VideoTitle>{videoInfo.videoTitle}</S.VideoTitle>
      <S.WriteSubtitleInputWrapper>
        <S.WriteSubtitleText for="writeSubtitle">자막입력</S.WriteSubtitleText>
        <S.WriteSubtitleInput
          name="writeSubtitle"
          value={subtitle}
          onChange={changeSubtitle}
        />
        <DefaultButton width="4.375rem" height="2.688rem" onClick={addSubtitle}>
          입력
        </DefaultButton>
      </S.WriteSubtitleInputWrapper>
      <SubtitleList subtitleList={subtitleList} />
      <S.SaveButtonWrapper>
        <S.TemporarySaveSubtitleButton onClick={() => onApplySubtitleList(0)}>
          임시저장
        </S.TemporarySaveSubtitleButton>
        <S.SaveSubtitleButton onClick={() => onApplySubtitleList(1)}>
          저장
        </S.SaveSubtitleButton>
      </S.SaveButtonWrapper>
    </S.WriteSubtitleWrapper>
  );
};

export default WriteSubtitle;
