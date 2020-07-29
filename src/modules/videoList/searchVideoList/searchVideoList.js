export const GET_SEARCH_VIDEO = 'GET_SEARCH_VIDEO';
export const GET_SEARCH_VIDEO_SUCCESS = 'GET_SEARCH_VIDEO_SUCCESS';
export const GET_SEARCH_VIDEO_FAILURE = 'GET_SEARCH_VIDEO_FAILURE';

// export const getPopularVideo = (sorting, skips) => ({
//   type: GET_POPULAR_VIDEO,
//   payload: {
//     sorting,
//     skips,
//   },
// });

export const getSearchVideo = (videoList) => ({
  type: GET_SEARCH_VIDEO,
  payload: videoList,
});

const initialState = {
  videoList: [{
    title: '[제국의 아이들 ZEA] - 바람의 유령 @인기가요 130811',
    url: 'Kv83It4ELHM ',
    status: 0,
    requested_date: '2020-05-17T15:00:00.000+00:00',
    count: 517009,
  }, ],
};

export default function searchVideoList(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_VIDEO:
      return {
        ...state,
        videoList: action.payload,
      };

    default:
      return state;
  }
}