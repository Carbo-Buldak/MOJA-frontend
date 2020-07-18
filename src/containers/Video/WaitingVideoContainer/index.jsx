import React from 'react';

import { MainVideoList } from '../../../components';

const WaitingVideoContainer = () => {
  const videoListDummy = {
    videos: [
      {
        title: '짱아는 못말려',
        url: 'lQh78nQeGJg1',
        status: 1,
        requested_date: '2020-05-17T15:00:00.000+00:00',
        count: 20,
      },
      {
        title: '후유증 레전드 댓글 모음집 1탄 | 제국의 아이들',
        url: 'IYl0NNbDF_g',
        status: 1,
        requested_date: '2020-05-17T15:00:00.000+00:00',
        count: 790433,
      },
      {
        title:
          '영혼의 꽃 쓰레쉬 인간 폼 (Spirit Blossom Thresh Human Transformation)',
        url: '9NiVjmxGBcw',
        status: 1,
        requested_date: '2020-05-17T15:00:00.000+00:00',
        count: '790433',
      },
      {
        title:
          '한 천상계가 만든 E선마 빌드ㅋㅋㅋ이 콤보 맞으면 정신이 나갑니다ㅋㅋㅋㅋ★천둥 5단계★ 탑 볼리베어',
        url: 'D0xpIYse-wM',
        status: 1,
        requested_date: '2020-05-17T15:00:00.000+00:00',
        count: 20,
      },
      {
        title: 'SEKAI NO OWARI「炎と森のカーニバル」',
        url: 'w9V3x61D994',
        status: 1,
        requested_date: '2020-05-17T15:00:00.000+00:00',
        count: '72,758,294',
      },
      {
        title: '짱아는 못말려',
        url: 'lQh78nQeGJg1',
        status: 1,
        requested_date: '2020-05-17T15:00:00.000+00:00',
        count: 20,
      },
    ],
  };
  return <MainVideoList videoType={0} videoListData={videoListDummy} />;
};

export default WaitingVideoContainer;
