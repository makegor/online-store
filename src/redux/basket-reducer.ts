import { API } from "../api/api"
import { ProductType } from "../types/types"
import { BaseThunkType, InferActionsTypes } from "./store"

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

type BasketAction = InferActionsTypes<typeof actionsBasket>
type ThunkType = BaseThunkType<BasketAction>

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

export const actionsBasket = {
    getOrderNumber: (orderNumber: number) => ({ type: GET_ORDER_NUMBER, orderNumber } as const),
    toggleFollowingProgress : (isFetching: boolean) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching } as const),
    setPopup : (bool: boolean) => ({ type: POPUP, bool } as const),
    setBasketAC : (basket: Array<ProductType>) => ({ type: SET_BASKET, basket } as const),
    toggleIsFetching : (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
    getIsAuth : (isAuth: boolean) => ({ type: GET_IS_AUTH, isAuth } as const)
}

export const setBasket = ():ThunkType => {
    return async (dispatch) => {
        dispatch(actionsBasket.toggleIsFetching(true))
        const isAuth = await API.getIsAuth()
        dispatch(actionsBasket.getIsAuth(isAuth))
        const basket = await API.getBasket(2)
        dispatch(actionsBasket.setBasketAC(basket))
        dispatch(actionsBasket.toggleIsFetching(false))
    }
}

export const buyProduct = (content: Array<object>):ThunkType => {
    return async (dispatch) => {
        dispatch(actionsBasket.setPopup(true))
        dispatch(actionsBasket.toggleFollowingProgress(true))
        try {
            let orderNumber = await API.buyProduct(4, content)
            dispatch(actionsBasket.getOrderNumber(orderNumber))
        } catch (e) {
            console.error(e)
        }
        finally {
            dispatch(actionsBasket.toggleFollowingProgress(false))
        }
    }
}

export const buyProductSuccess = ():ThunkType => {
    return async (dispatch) => {
        dispatch(actionsBasket.toggleIsFetching(true))
        await API.emptyTrash()
        dispatch(actionsBasket.setPopup(false))
        //dispatch(getOrderNumber(null))
        dispatch(actionsBasket.setBasketAC([]))
        dispatch(actionsBasket.toggleIsFetching(false))
    }
}

export default basketReducer