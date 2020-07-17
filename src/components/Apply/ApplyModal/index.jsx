import React, { useState, useEffect } from 'react';

import { DefaultButton } from '../../../GlobalStyle';
import * as S from './style';
import * as Icon from '../../../assets';
import ModalHeader from '../../Modals/ModalHeader';
import getVideoId from '../../../utils/getVideoId';
import getVideoThumbnail from '../../../utils/getVideoThumbnail';
import checkValidateUrl from '../../../utils/checkValidateUrl';

const ApplyModal = ({ getApplyData }) => {
  const [isThumbnailExist, setIsThumbnailExist] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const videoId = getVideoId(videoUrl);

  const changeVideoUrl = (e) => {
    setVideoUrl(e.target.value);
  };

  const changeVideoTitle = (e) => {
    setVideoTitle(e.target.value);
  };

  const checkIsDataAvailable = () => {
    if (videoUrl.length === 0) {
      alert(`url을 입력해주세요!`);
    } else if (videoTitle.length === 0) {
      alert(`제목을 입력해주세요 !`);
    } else if (checkValidateUrl(videoUrl) === false) {
      alert('유효하지 않은 URL 입니다');
    } else {
      getApplyData(videoTitle, videoId);
      console.log(getVideoThumbnail(getVideoId(videoUrl)));
    }
  };

  const setVideoThumbnail = () => {
    if (checkValidateUrl(videoUrl)) {
      setIsThumbnailExist(true);
    } else {
      setIsThumbnailExist(false);
    }
  };

  useEffect(() => {
    setVideoThumbnail();
  }, [videoUrl]);

  return (
    <S.ApplyModalWrapper>
      <ModalHeader
        modalTitle="자막 요청하기"
        modalIcon={Icon.upload.apply_video}
      />
      <S.ApplyContentWrapper>
        <S.ApplyItemWrapper>
          <S.ApplyModalInputName>
            요청하고싶은 영상의 URL을 입력해주세요
          </S.ApplyModalInputName>
          <S.ApplyUrlInput
            placeholder="유튜브 URL을 입력해 주세요..."
            value={videoUrl}
            onChange={changeVideoUrl}
          />
        </S.ApplyItemWrapper>
        <S.ApplyItemWrapper>
          <S.ApplyModalInputName>
            영상의 제목을 입력해주세요
          </S.ApplyModalInputName>
          <S.ApplyUrlInput
            placeholder="영상의 제목을 입력해 주세요..."
            value={videoTitle}
            onChange={changeVideoTitle}
          />
        </S.ApplyItemWrapper>
        <div>
          <S.ApplyModalInputName>미리보기</S.ApplyModalInputName>
          <S.ApplyUrlThumbnailWrapper>
            {isThumbnailExist ? (
              <S.ApplyUrlThumbnail src={getVideoThumbnail(videoId)} />
            ) : (
              <S.ApplyUrlThumbnailText>
                URL을 입력하면 미리보기가 표시됩니다
              </S.ApplyUrlThumbnailText>
            )}
          </S.ApplyUrlThumbnailWrapper>
        </div>
        <DefaultButton
          width="35.63rem"
          height=" 3.125rem"
          onClick={checkIsDataAvailable}
        >
          요청하기
        </DefaultButton>
      </S.ApplyContentWrapper>
    </S.ApplyModalWrapper>
  );
};

export default ApplyModal;
