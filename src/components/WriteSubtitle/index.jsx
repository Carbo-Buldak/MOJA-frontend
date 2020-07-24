import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

import { DefaultButton } from '../../GlobalStyle';
import * as S from './style';
import * as Icons from '../../assets';
import VideoType from '../Atoms/VideoType';
import SubtitleList from './SubtitleList';

const WriteSubtitle = ({ videoTitle }) => {
  const videoRef = useRef(null);
  const videoDummyTitle =
    '영혼의 꽃 킨드레드 (Spirit Blossom Kindred Skin Preview)';
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
        url="https://www.youtube.com/watch?v=Opm9vrqFMMk"
        controls={true}
      />
      <S.VideoTitle>{videoDummyTitle}</S.VideoTitle>
      <S.WriteSubtitleInputWrapper>
        <S.WriteSubtitleText for="writeSubtitle">자막입력</S.WriteSubtitleText>
        <S.WriteSubtitleInput name="writeSubtitle" />
        <DefaultButton width="4.375rem" height="2.688rem">
          입력
        </DefaultButton>
      </S.WriteSubtitleInputWrapper>
      <SubtitleList />
      <S.SaveButtonWrapper>
        <S.TemporarySaveSubtitleButton>임시저장</S.TemporarySaveSubtitleButton>
        <S.SaveSubtitleButton>저장</S.SaveSubtitleButton>
      </S.SaveButtonWrapper>
    </S.WriteSubtitleWrapper>
  );
};

export default WriteSubtitle;
