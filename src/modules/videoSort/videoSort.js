export const CHANGE_VIDEO_SORTING = 'CHANGE_VIDEO_SORTING';


export const changeVideoSorting = (sortingStatus) => ({
  type: CHANGE_VIDEO_SORTING,
  payload: sortingStatus
})

const initialState = {
  sorting: "date",
}

export default function videoSort(state = initialState, action) {
  switch (action.payload) {
    case CHANGE_VIDEO_SORTING:
      return {
        ...state, sorting: action.payload
      }
      default:
        return state
  }
}