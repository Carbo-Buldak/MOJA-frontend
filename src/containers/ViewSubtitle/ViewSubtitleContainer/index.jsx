import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { ViewSubtitle } from '../../../components';
import { getVideoInfo } from '../../../modules/video/video';
import setTimeToString from '../../../utils/setTimeToString';
import { getVideoInfoReq } from '../../../lib/api';

const ViewSubtitleContainer = ({
  videoUrl,
  videoTitle,
  videoInfo,
  getVideoDetailInfo,
}) => {
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const [nowIndex, setNowIndex] = useState(0);

  const handleDuration = (duration) => {
    console.log('onDuration', duration);
    setDuration(duration);
  };

  const handleProgress = (state) => {
    setPlayed(state.playedSeconds + 1);
    console.log(`플레이된 시간은 : ${played}`);
    console.log('onProgress', setTimeToString(state.playedSeconds));
  };

  const setIsShow = () => {
    videoInfo.subtitles.map((subtitleItem, index) => {
      console.log(`playTime : ${subtitleItem.playedTime}, played : ${played}`);
      if (played >= subtitleItem.playedTime) {
        console.log(subtitleItem.subtitle, index);
        setNowIndex(index);
        console.log(`nowIndex : ${nowIndex}`);
      }
    });
  };

  const checkNextIndexExist = () => {
    if (videoInfo.subtitles.length > nowIndex + 1) {
      return videoInfo.subtitles[nowIndex + 1];
    } else {
      return null;
    }
  };

  useEffect(() => {
    // getVideoDetailInfo(videoUrl);
    getVideoInfoReq(videoUrl)
      .then((video) => {
        getVideoDetailInfo(video);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setIsShow();
  }, [played, setIsShow]);

  return (
    <ViewSubtitle
      url={videoUrl}
      title={videoTitle}
      videoInfo={videoInfo}
      handleDuration={handleDuration}
      handleProgress={handleProgress}
      nowSubtitle={videoInfo.subtitles[nowIndex]}
      nextSubtitle={checkNextIndexExist()}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    videoInfo: state.video.video,
    videoUrl: state.video.videoUrl,
    videoTitle: state.video.videoTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideoDetailInfo: (videoUrl) => dispatch(getVideoInfo(videoUrl)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewSubtitleContainer);
