import { createSelector } from "reselect"

const getState = (state) => {
    return state
}

export const getBasketProduct = createSelector(getState, (state) => {
    return state.Basket.basket.filter(product => product.summ > 0 );
});

export const getIsFetching = createSelector(getState, (state) => {
    return state.Basket.isFetching
});

export const getFollowingInProgress = createSelector(getState, (state) => {
    return state.Basket.followingInProgress
});

export const getPopup = createSelector(getState, (state) => {
    return state.Basket.popup
});

export const getOrderNumber = createSelector(getState, (state) => {
    return state.Basket.orderNumber
});

export const getIsAuth = createSelector(getState, (state) => {
    return state.Basket.isAuth
});

