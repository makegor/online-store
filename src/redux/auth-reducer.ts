import { API } from "../api/api"
import { ThunkAction } from "redux-thunk"

const SET_USER_DATA = 'work/src/redux/auth-reducer/SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'work/src/redux/auth-reducer/TOGGLE_IS_FETCHING'

interface AuthState {
  email: string | null
  userId: number | null
  isAuth: boolean
  isFetching: boolean
}

interface SetUserDataAction {
  type: typeof SET_USER_DATA
  payload?: object
}

interface ToggleIsFetchingAction {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

const inistialState: AuthState = {
  email: null,
  userId: null,
  isAuth: false,
  isFetching: false
}

type AuthAction = SetUserDataAction | ToggleIsFetchingAction

const authReducer = (state = inistialState, action: AuthAction) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    default:
      return state
  }
}

type ThunkType = ThunkAction<Promise<void>, AuthState, unknown, AuthAction>

const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingAction => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setAuthUserData = (email: string | null, userId: number | null, isAuth: boolean):SetUserDataAction => ({ type: SET_USER_DATA, payload: { email, userId, isAuth } })

export const getAuthUserData = ():ThunkType => {
  return async (dispatch) => {
    const response = await API.me()
    dispatch(toggleIsFetching(true))
    if (response.resultCode === 0) {
      let { email, userId } = response.data
      dispatch(setAuthUserData(email, userId, true))
      dispatch(toggleIsFetching(false))
    }
  }
}

export const login = (email: string, password: string):ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const response = await API.login(1, email, password)
    if (response.resultCode === 0) {
      dispatch(getAuthUserData())
      dispatch(toggleIsFetching(false))
    }
    else {
      const message = response.messages.length > 0 ? response.messages[0] : "Some error"
    }
  }
}

export const logout = ():ThunkType => {
  return async (dispatch) => {
    const response = await API.logout()
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, false))
    }
  }
}

export default authReducer