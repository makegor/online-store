import { API } from "../api/api";

import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'work/src/redux/auth-reducer/SET_USER_DATA';

let inistialState = {
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = inistialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload 
      }

    default:
      return state;
  }
}

export const setAuthUserData = (email, login, isAuth) => ({ type: SET_USER_DATA, payload: { email, login, isAuth } });

export const getAuthUserData = () => {
  return async (dispatch) => {
    const response = await API.me();
    if (response.resultCode === 0) {
      let { email, login } = response.data;
      dispatch(setAuthUserData(email, login, true));
    }
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await API.login(1, email, password);
    if (response.resultCode === 0) {
      dispatch(getAuthUserData());
    }
    else {
      let message = response.messages.length > 0 ? response.messages[0] : "Some error";
      dispatch(stopSubmit("Login", { _error: message }));
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    const response = await API.logout()
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, false));
    }
  }
}

export default authReducer;