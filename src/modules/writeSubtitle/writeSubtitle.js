export const APPLY_SUBTITLE_LIST = 'APPLY_SUBTITLE_LIST';
export const APPLY_SUBTITLE_LIST_SUCCESS = 'APPLY_SUBTITLE_LIST_SUCCESS';
export const APPLY_SUBTITLE_LIST_FAILURE = 'APPLY_SUBTITLE_LIST_FAILURE';

export const TEMPORARY_SAVE_SUBTITLE_LIST = "TEMPORARY_SAVE_SUBTITLE_LIST";
export const TEMPORARY_SAVE_SUBTITLE_LIST_SUCCESS = "TEMPORARY_SAVE_SUBTITLE_LIST_SUCCESS";
export const TEMPORARY_SAVE_SUBTITLE_LIST_FAILURE = "TEMPORARY_SAVE_SUBTITLE_LIST_FAILURE"

export const applySubtileList = (subtitleList) => ({
  type: APPLY_SUBTITLE_LIST,
  payload: subtitleList
})

export const temporarySaveSubtitleList = (subtitleList) => ({
  type: TEMPORARY_SAVE_SUBTITLE_LIST,
  payload: subtitleList
})

const initialState = {
  subtitleList: []
}

export default function writeSubtitle(state = initialState, action) {
  switch (action.type) {
    case APPLY_SUBTITLE_LIST: {
      return {
        ...state,
        subtitleList: action.payload
      }
    }
    case TEMPORARY_SAVE_SUBTITLE_LIST: {
      return {
        ...state,
        subtitleList: action.payload
      }
    }
    default:
      return state;
  }
}