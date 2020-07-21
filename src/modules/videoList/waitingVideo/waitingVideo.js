export const GET_WAITING_VIDEO = 'GET_WAITING_VIDEO';
export const GET_WAITING_VIDEO_SUCCESS = 'GET_WAITING_VIDEO_SUCCESS';
export const GET_WAITING_VIDEO_FAILURE = 'GET_WAITING_VIDEO_FAILURE';

export const getWaitingVideo = (sorting, skips) => ({
  type: GET_WAITING_VIDEO,
  payload: {
    sorting,
    skips,
  },
});

const initialState = {
  videoList: [
    {
      title: '짱구는 못말려',
      url: 'lQh78nQeGJg1',
      status: 1,
      requested_date: '2020-05-17T15:00:00.000+00:00',
      count: 20,
    },
  ],
};

export default function WaitingVideo(state = initialState, action) {
  switch (action.type) {
    case GET_WAITING_VIDEO:
      return {
        ...state,
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
