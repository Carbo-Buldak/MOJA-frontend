export const CHANGE_MODAL = "CHANGE_MODAL";

export const modalTypes = {
  none: "none",
  apply: "apply"
}

export const changeModal = (modalType) => ({
  type: CHANGE_MODAL,
  payload: {
    modalType
  }
})

const initialState = {
  modalType: modalTypes.none
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODAL:
      return {
        ...state, modalType: action.payload.modalType
      }
      default:
        return state
  }
}