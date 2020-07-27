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

  const changeSubtitle = (e) => {
    setSubtitle(e.target.value);
  };

  const addSubtitle = () => {
    if (subtitle.length > 0) {
      addSubtitleList(subtitle);
    }
    setSubtitle('');
  };

  const applySubtitle = () => {
    let checkApply = window.confirm('정말로 자막 작성을 완료하시겠습니까?');
    if (checkApply === true) {
      onApplySubtitleList(1);
    }
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
        <S.WriteSubtitleButton
          width="4.375rem"
          height="2.688rem"
          onClick={addSubtitle}
        >
          입력
        </S.WriteSubtitleButton>
      </S.WriteSubtitleInputWrapper>
      <SubtitleList subtitleList={subtitleList} />
      <S.SaveButtonWrapper>
        <S.TemporarySaveSubtitleButton onClick={() => onApplySubtitleList(0)}>
          임시저장
        </S.TemporarySaveSubtitleButton>
        <S.SaveSubtitleButton onClick={applySubtitle}>
          저장
        </S.SaveSubtitleButton>
      </S.SaveButtonWrapper>
    </S.WriteSubtitleWrapper>
  );
};

export default WriteSubtitle;
