import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import setTimeToString from '../../../utils/setTimeToString';
import { WriteSubtitle } from '../../../components';
import {
  applySubtileList,
  temporarySaveSubtitleList,
} from '../../../modules/writeSubtitle/writeSubtitle';
import { addTemporarySubtitleReq, addSubtitleReq } from '../../../lib/api';

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
  const token = localStorage.getItem('token');
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
    const addSubtitleParam = {
      token,
      title: videoInfo.videoTitle,
      url: videoInfo.videoUrl,
      subtitles: subtitleList,
    };
    if (type === 0) {
      addTemporarySubtitleReq(addSubtitleParam)
        .then((subtitle) => {
          temporarySubtitleList(subtitle);
          const isFinishWriting = window.confirm(
            '임시저장이 완료되었습니다., 나가시겠습니까?',
          );
          if (isFinishWriting === true) {
            history.push('/');
          }
        })
        .catch((e) => console.log(e));
    } else if (type === 1) {
      console.log(token);

      addSubtitleReq(addSubtitleParam)
        .then((subtitle) => {
          applySubtitle(subtitle);
          history.push('/');
        })
        .catch((e) => console.log(e));
    }
  };

  const deleteSubtitle = (id) => {
    setSubtitleList(
      subtitleList.filter((subtitleListItem, index) => index !== id),
    );
  };

  useEffect(() => {
    console.log(`savedSubtitleList:`, savedSubtitleList);
    console.log(subtitleList);
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
        deleteSubtitle={deleteSubtitle}
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
