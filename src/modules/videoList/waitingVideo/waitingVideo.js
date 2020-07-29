export const GET_WAITING_VIDEO = 'GET_WAITING_VIDEO';
export const GET_WAITING_VIDEO_SUCCESS = 'GET_WAITING_VIDEO_SUCCESS';
export const GET_WAITING_VIDEO_FAILURE = 'GET_WAITING_VIDEO_FAILURE';

// export const getWaitingVideo = (sorting, skips) => ({
//   type: GET_WAITING_VIDEO,
//   payload: {
//     sorting,
//     skips,
//   },
// });

export const getWaitingVideo = (videoList) => ({
  type: GET_WAITING_VIDEO,
  payload: videoList
})

const initialState = {
  videoList: [{
    title: '남자아이돌 신나는 여름노래모음｜KPOP BOY GROUP｜IDOL PLAYLIST',
    url: '_g--oHmv86I&t=438s',
    status: 1,
    requested_date: '2020-05-17T15:00:00.000+00:00',
    count: 20,
  }, ],
};

export default function WaitingVideo(state = initialState, action) {
  switch (action.type) {
    case GET_WAITING_VIDEO:
      return {
        ...state,
        videoList: action.payload
      };
    case GET_WAITING_VIDEO_SUCCESS:
      return {
        ...state,
        videoList: action.payload,
      };
    default:
      return state;
  }
}