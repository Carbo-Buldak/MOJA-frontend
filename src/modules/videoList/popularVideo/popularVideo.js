export const GET_POPULAR_VIDEO = 'GET_POPULAR_VIDEO';
export const GET_POPULAR_VIDEO_SUCCESS = 'GET_POPULAR_VIDEO_SUCCESS';
export const GET_POPULAR_VIDEO_FAILURE = 'GET_POPULAR_VIDEO_FAILURE';

// export const getPopularVideo = (sorting, skips) => ({
//   type: GET_POPULAR_VIDEO,
//   payload: {
//     sorting,
//     skips,
//   },
// });

export const getPopularVideo = (videoList) => ({
  type: GET_POPULAR_VIDEO,
  payload: videoList
})

const initialState = {
  videoList: [{
    title: '[제국의 아이들 ZEA] - 바람의 유령 @인기가요 130811',
    url: 'Kv83It4ELHM ',
    status: 1,
    requested_date: '2020-05-17T15:00:00.000+00:00',
    count: 517009,
  }, ],
};

export default function popularVideo(state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR_VIDEO:
      return {
        ...state,
        videoList: action.payload
      };
    case GET_POPULAR_VIDEO_SUCCESS:
      return {
        ...state,
        videoList: action.payload,
      };
    default:
      return state;
  }
}