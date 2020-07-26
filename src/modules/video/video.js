export const GET_SELECTED_VIDEO_URL = 'GET_SELECTED_VIDEO_URL';

export const getSelectedVideoUrl = (videoUrl, videoTitle) => ({
  type: GET_SELECTED_VIDEO_URL,
  payload: { videoUrl, videoTitle },
});

const initialState = {
  videoUrl: '',
  videoTitle: '',
};

export default function video(state = initialState, action) {
  switch (action.type) {
    case GET_SELECTED_VIDEO_URL:
      return {
        ...state,
        videoUrl: action.payload.videoUrl,
        videoTitle: action.payload.videoTitle,
      };
    default:
      return state;
  }
}
