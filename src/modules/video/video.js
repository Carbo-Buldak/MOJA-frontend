export const GET_SELECTED_VIDEO_URL = 'GET_SELECTED_VIDEO_URL';

export const GET_VIDEO_INFO = 'GET_VIDEO_INFO';
export const GET_VIDEO_INFO_SUCCESS = 'GET_VIDEO_INFO_SUCCESS';
export const GET_VIDEO_INFO_FAILURE = 'GET_VIDEO_INFO_FAILURE';

export const getSelectedVideoUrl = (videoUrl, videoTitle) => ({
  type: GET_SELECTED_VIDEO_URL,
  payload: {
    videoUrl,
    videoTitle,
  },
});

export const getVideoInfo = (videoUrl) => ({
  type: GET_VIDEO_INFO,
  payload: videoUrl,
});

const initialState = {
  videoUrl: '',
  videoTitle: '',
  video: {
    title: '',
    url: '',
    status: 2,
    author: '신짱구',
    subtitles: [  ],
    date: '2020.05.20',
    count: 1200,
  },
};

export default function video(state = initialState, action) {
  switch (action.type) {
    case GET_SELECTED_VIDEO_URL:
      return {
        ...state,
        videoUrl: action.payload.videoUrl,
          videoTitle: action.payload.videoTitle,
      };
    case GET_VIDEO_INFO:
      return {
        ...state,
      };
    case GET_VIDEO_INFO_SUCCESS:
      return {
        ...state,
        video: action.payload,
      };
    default:
      return state;
  }
}