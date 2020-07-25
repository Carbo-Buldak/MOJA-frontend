import React, { useEffect, useState } from 'react';
import setTimeToString from '../../../utils/setTimeToString';

import { WriteSubtitle } from '../../../components';

const WriteSubtitleContainer = () => {
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const [subtitleList, setSubtitleList] = useState([
    { playedTime: '', subtitle: '' },
  ]);

  const handleDuration = (duration) => {
    console.log('onDuration', duration);
    setDuration(duration);
  };

  const handleProgress = (state) => {
    setPlayed(state.playedSeconds + 1);
    console.log(`플레이된 시간은 : ${played}`);
    console.log('onProgress', setTimeToString(state.playedSeconds));
  };

  return (
    <div>
      <WriteSubtitle
        handleDuration={handleDuration}
        handleProgress={handleProgress}
      />
    </div>
  );
};

export default WriteSubtitleContainer;
