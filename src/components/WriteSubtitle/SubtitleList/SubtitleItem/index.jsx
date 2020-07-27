import React from 'react';

import * as S from './style';
import * as Icon from '../../../../assets';
import setTimeToString from '../../../../utils/setTimeToString';

const SubtitleItem = ({ playedTime, subtitle, subtitleIndex }) => {
  const playedTimeString = setTimeToString(playedTime);
  return (
    <S.SubtitleItemWrapper>
      <S.SubtitleTime>
        <p>{playedTimeString}</p>
      </S.SubtitleTime>
      <S.SubtitleText>
        <p>{subtitle}</p>
      </S.SubtitleText>
      {/* <S.DeleteSubtitleButton src={Icon.writing.delete_icon} /> */}
    </S.SubtitleItemWrapper>
  );
};

export default SubtitleItem;
