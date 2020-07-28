export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILURE = 'GET_USER_DATA_FAILURE';

export const getUserData = (token) => ({
  type: GET_USER_DATA,
  payload: token,
});

const initialState = {
  user: {
    email: 'asdf@gmail.com',
    nickname: '신짱구',
    point: 200,
    requested_videos: [{
      url: '1W6oUsLXm3k&t=750s',
      title: 'Pokemon Lofi Mix 2019 : Pokemons Jukebox (vol1)',
    }, ],
    subtitling_videos: [{
        url: '9HafQPMZAB0',
        title: '[playlist] 엑소 겨울앨범=명곡 모음',
        subtitles: [{
          playedTime: 0,
          subtitle: '짱아야',
        }, ],
      },
      {
        url: 'r1X_AFC8gnA',
        title: '노틸러스 랜덤 타워 디펜스',
        subtitles: [{
          playedTime: 0,
          subtitle: '짱아야',
        }, ],
      },
    ],
    subtitled_videos: [{
      url: 'BHjSdkF4gCs',
      title: '[고독한미식가] 2인분도 넘는 엄청난 크기의 고기 꼬치! 브라질 음식 슈하스코',
    }, ],
  },
};

export default function mypage(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}