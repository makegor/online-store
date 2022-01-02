import { API } from "../api/api";

const GET_ORDER_NUMBER = 'work/src/redux/basket-reducer/GET_ORDER_NUMBER';
const TOGGLE_IS_FETCHING = 'work/src/redux/basket-reducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'work/src/redux/basket-reducer/TOGGLE_IS_FOLLOWING_PROGRESS';
const POPUP = 'work/src/redux/basket-reducer/POPUP';
const SET_BASKET = 'work/src/redux/basket-reducer/SET_BASKET';
const GET_IS_AUTH = 'work/src/redux/basket-reducer/GET_IS_AUTH';

let inisialState = {
    basket: [],
    isFetching: true,
    orderNumber: null,
    followingInProgress: null,
    popup: false,
    isAuth: null
};

const basketReducer = (state = inisialState, action) => {
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

        default: return state;
    }
}

const getOrderNumber = (orderNumber) => ({ type: GET_ORDER_NUMBER, orderNumber });
const toggleFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching });
const setPopup = (bool) => ({ type: POPUP, bool });
const setBasketAC = (basket) => ({ type: SET_BASKET, basket });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
const getIsAuth = (isAuth) => ({ type: GET_IS_AUTH, isAuth });

export const setBasket = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const isAuth = await API.getIsAuth();
        dispatch(getIsAuth(isAuth));
        const basket = await API.getBasket(2);
        dispatch(setBasketAC(basket));
        dispatch(toggleIsFetching(false));
    }
}

export const buyProduct = (content) => {
    return async (dispatch) => {
        dispatch(setPopup(true));
        dispatch(toggleFollowingProgress(true));
        try {
            let orderNumber = await API.buyProduct(4, content);
            dispatch(getOrderNumber(orderNumber));
        } catch (e) {
            console.error(e);
        }
        finally {
            dispatch(toggleFollowingProgress(false));
        }
    }
}

export const buyProductSuccess = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        await API.emptyTrash();
        dispatch(setPopup(false));
        dispatch(getOrderNumber(null));
        dispatch(setBasketAC([]));
        dispatch(toggleIsFetching(false));
    }
}

export default basketReducer;