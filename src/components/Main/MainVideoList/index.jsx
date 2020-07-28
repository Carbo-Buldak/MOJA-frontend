import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

import * as S from './style';
import * as Icon from '../../../assets';
import VideoList from '../../Atoms/VideoList';
import VideoType from '../../Atoms/VideoType';
import {setHeaderVisibility} from '../../../modules/header/header'

const MainVideoList = ({ videoType, videoListData, getSelectedVideoUrl, setHeaderVisible }) => {
  useEffect(()=>{
    setHeaderVisible(true)
  },[])
  return (
    <S.MainVideoListWrapper>
      {videoType === 0 ? (
        <>
          <VideoType
            videoType="자막을 기다리는 영상"
            videoTypeIcon={Icon.feed.wait_video}
          />
          <Link to="/waitingVideo">
            <S.ShowMoreVideosBtn>더보기</S.ShowMoreVideosBtn>
          </Link>
        </>
      ) : (
        <>
          <VideoType
            videoType="인기 영상"
            videoTypeIcon={Icon.feed.popular_video}
          />
          <Link to="/popularVideo">
            <S.ShowMoreVideosBtn>더보기</S.ShowMoreVideosBtn>
          </Link>
        </>
      )}

      <VideoList
        videoListData={videoListData}
        getSelectedVideoUrl={getSelectedVideoUrl}
      />
    </S.MainVideoListWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
	return {
		setHeaderVisible: (visibility) => dispatch(setHeaderVisibility(visibility))
	}
}

export default connect(null, mapDispatchToProps)(MainVideoList);
