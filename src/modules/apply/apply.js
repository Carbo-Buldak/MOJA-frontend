export const GET_APPLY_DATA = 'GET_APPLY_DATA'

export const getApplyData = (title, url) => ({
  type: GET_APPLY_DATA,
  payload: {
    url,
    title,
  }
})

const initialState = {
  url: "",
  title: "",
}

export default function apply(state = initialState, action) {
  switch (action.type) {
    case GET_APPLY_DATA: {
      return {
        ...state,
        title: action.payload.title,
        url: action.payload.url
      }
    }
    default:
      return state;
  }
}