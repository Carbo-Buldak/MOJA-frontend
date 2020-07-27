import React from 'react';

import * as S from './style';
import SubtitleItem from './SubtitleItem';

const SubtitleList = React.memo(({ subtitleList, deleteSubtitle }) => {
  return (
    <S.SubtitleListWrapper>
      {subtitleList.length > 0 ? (
        subtitleList.map((subtitleItem, dataIndex) => (
          <SubtitleItem
            key={subtitleItem.playedTime}
            subtitleIndex={dataIndex}
            subtitle={subtitleItem.subtitle}
            playedTime={subtitleItem.playedTime}
            deleteSubtitle={deleteSubtitle}
          />
        ))
      ) : (
        <div>자막을 입력해보세요</div>
      )}
    </S.SubtitleListWrapper>
  );
});

export default SubtitleList;
