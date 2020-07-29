export const SET_HEADER_VISIBILITY = 'SET_HEADER_VISIBILITY';

export const setHeaderVisibility = (visibility) => ({
  type: SET_HEADER_VISIBILITY,
  payload: visibility,
});

const initialState = {
  visibility: true,
};

export default function heaer(state = initialState, action) {
  switch (action.type) {
    case SET_HEADER_VISIBILITY: {
      return { ...state, visibility: action.payload };
    }
    default:
      return { ...state };
  }
}
