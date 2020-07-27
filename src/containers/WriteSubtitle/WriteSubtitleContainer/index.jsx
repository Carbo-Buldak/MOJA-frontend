import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import setTimeToString from '../../../utils/setTimeToString';
import { WriteSubtitle } from '../../../components';
import {
  applySubtileList,
  temporarySaveSubtitleList,
} from '../../../modules/writeSubtitle/writeSubtitle';

const WriteSubtitleContainer = ({
  savedSubtitleList,
  applySubtitle,
  temporarySubtitleList,
  videoTitle,
  videoUrl,
}) => {
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const [subtitleList, setSubtitleList] = useState(savedSubtitleList);
  const history = useHistory();

  const videoInfo = {
    videoUrl,
    videoTitle,
  };

  const handleDuration = (duration) => {
    console.log('onDuration', duration);
    setDuration(duration);
  };

  const handleProgress = (state) => {
    setPlayed(state.playedSeconds + 1);
    console.log(`플레이된 시간은 : ${played}`);
    console.log('onProgress', setTimeToString(state.playedSeconds));
  };

  const addSubtitleList = (subtitle) => {
    const playedTime = played;
    const subtitleItem = {
      playedTime,
      subtitle,
    };
    setSubtitleList(subtitleList.concat(subtitleItem));
  };

  const onApplySubtitleList = (type) => {
    if (type === 0) {
      temporarySubtitleList(subtitleList);
    } else if (type === 1) {
      applySubtitle(subtitleList);
      history.push('/');
    }
  };

  useEffect(() => {
    console.log(savedSubtitleList);
  }, [savedSubtitleList]);
  return (
    <div>
      <WriteSubtitle
        videoInfo={videoInfo}
        subtitleList={subtitleList}
        handleDuration={handleDuration}
        handleProgress={handleProgress}
        addSubtitleList={addSubtitleList}
        onApplySubtitleList={onApplySubtitleList}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    savedSubtitleList: state.writeSubtitle.subtitleList,
    videoUrl: state.video.videoUrl,
    videoTitle: state.video.videoTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    applySubtitle: (subtitleList) => dispatch(applySubtileList(subtitleList)),
    temporarySubtitleList: (subtitleList) =>
      dispatch(temporarySaveSubtitleList(subtitleList)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WriteSubtitleContainer);
