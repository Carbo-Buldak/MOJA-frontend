import React from 'react';

import * as S from './style';
import SubtitleItem from './SubtitleItem';

const SubtitleList = React.memo(({ subtitleList }) => {
  const subtitleDummy = [
    { playedTime: 3600, subtitle: '짱아야' },
    { playedTime: 3600, subtitle: '짱아야' },
    { playedTime: 3600, subtitle: '짱아야' },
    { playedTime: 3600, subtitle: '짱아야' },
    { playedTime: 3600, subtitle: '짱아야' },
    { playedTime: 3600, subtitle: '짱아야' },
    { playedTime: 3600, subtitle: '짱아야' },
  ];
  return (
    <S.SubtitleListWrapper>
      {subtitleDummy.map((subtitleItem, dataIndex) => (
        <SubtitleItem
          key={subtitleItem.playedTime}
          subtitleIndex={dataIndex}
          subtitle={subtitleItem.subtitle}
          playedTime={subtitleItem.playedTime}
        />
      ))}
    </S.SubtitleListWrapper>
  );
});

export default SubtitleList;
