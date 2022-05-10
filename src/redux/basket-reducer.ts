import { API } from "../api/api"
import { ThunkAction } from "redux-thunk"
import { ProductType } from "../types/types"

const GET_ORDER_NUMBER = 'work/src/redux/basket-reducer/GET_ORDER_NUMBER'
const TOGGLE_IS_FETCHING = 'work/src/redux/basket-reducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'work/src/redux/basket-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'
const POPUP = 'work/src/redux/basket-reducer/POPUP'
const SET_BASKET = 'work/src/redux/basket-reducer/SET_BASKET'
const GET_IS_AUTH = 'work/src/redux/basket-reducer/GET_IS_AUTH'

interface BasketState {
    basket: Array<ProductType>,
    isFetching: boolean,
    orderNumber: number | null,
    followingInProgress: boolean,
    popup: boolean,
    isAuth: boolean
}

const inisialState = {
    basket: [] as Array<ProductType>,
    isFetching: true,
    orderNumber: null as number | null,
    followingInProgress: false,
    popup: false,
    isAuth: false //authReducer + common isFetching
}

type BasketAction = GetOrderNumberAction | ToggleFollowingProgressAction | SetPopupAction | SetBasketACAction | ToggleIsFetchingAction | GetIsAuthAction

type ThunkType = ThunkAction<Promise<void>, BasketState, unknown, BasketAction>

const basketReducer = (state = inisialState, action: BasketAction):BasketState => {
    switch (action.type) {

        case GET_ORDER_NUMBER:
            return {
                ...state, orderNumber: action.orderNumber
            }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }


        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
            }

        case POPUP:
            return {
                ...state, popup: action.bool
            }

        case SET_BASKET:
            return {
                ...state, basket: action.basket
            }

        case GET_IS_AUTH:
            return {
                ...state, isAuth: action.isAuth
            }

        default: return state
    }
}


interface GetOrderNumberAction {
    type: typeof GET_ORDER_NUMBER
    orderNumber: number
}
const getOrderNumber = (orderNumber: number):GetOrderNumberAction => ({ type: GET_ORDER_NUMBER, orderNumber })

interface ToggleFollowingProgressAction {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
}
const toggleFollowingProgress = (isFetching: boolean):ToggleFollowingProgressAction => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching })

interface SetPopupAction {
    type: typeof POPUP
    bool: boolean
}
const setPopup = (bool: boolean):SetPopupAction => ({ type: POPUP, bool })

interface SetBasketACAction {
    type: typeof SET_BASKET
    basket: Array<ProductType>
}
const setBasketAC = (basket: Array<ProductType>):SetBasketACAction => ({ type: SET_BASKET, basket })

interface ToggleIsFetchingAction {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingAction => ({ type: TOGGLE_IS_FETCHING, isFetching })

interface GetIsAuthAction {
    type: typeof GET_IS_AUTH
    isAuth: boolean
}
const getIsAuth = (isAuth: boolean):GetIsAuthAction => ({ type: GET_IS_AUTH, isAuth })


export const setBasket = ():ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        const isAuth = await API.getIsAuth()
        dispatch(getIsAuth(isAuth))
        const basket = await API.getBasket(2)
        dispatch(setBasketAC(basket))
        dispatch(toggleIsFetching(false))
    }
}

export const buyProduct = (content: Array<object>):ThunkType => {
    return async (dispatch) => {
        dispatch(setPopup(true))
        dispatch(toggleFollowingProgress(true))
        try {
            let orderNumber = await API.buyProduct(4, content)
            dispatch(getOrderNumber(orderNumber))
        } catch (e) {
            console.error(e)
        }
        finally {
            dispatch(toggleFollowingProgress(false))
        }
    }
}

export const buyProductSuccess = ():ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        await API.emptyTrash()
        dispatch(setPopup(false))
        //dispatch(getOrderNumber(null))
        dispatch(setBasketAC([]))
        dispatch(toggleIsFetching(false))
    }
}

export default basketReducer