import { Login } from "../../components";

export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const logIn = (loginParams) => ({
  type: LOG_IN,
  payload: loginParams,
})

export const signUp = (signUpParams) => ({
  type: SIGN_UP,
  payload: signUpParams
})

const initialState = {
  loginParams: {
    email:"",
    password: ""
  },
  signUpParams:{
    email: "",
    password:"",
    nickName: ""
  }
}

export default function auth(state=initialState, action){
  switch (action.payload) {
    case LOG_IN:
      return{...state, loginParams:action.payload}
    case SIGN_UP:
      return {...state, signUpParams: action.payload}
    default:
      return state;
  }
}