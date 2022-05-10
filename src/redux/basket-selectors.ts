import { createSelector } from "reselect"
import { RootState } from "./store"

const getState = (state: RootState) => {
    return state.Basket
}

export const getBasketProduct = createSelector(getState, (Basket) => {
    return Basket.basket.filter(product => product.summ > 0 )
})

export const getIsFetching = createSelector(getState, (Basket) => {
    return Basket.isFetching
})

export const getFollowingInProgress = createSelector(getState, (Basket) => {
    return Basket.followingInProgress
})

export const getPopup = createSelector(getState, (Basket) => {
    return Basket.popup
})

export const getOrderNumber = createSelector(getState, (Basket) => {
    return Basket.orderNumber
})

export const getIsAuth = createSelector(getState, (Basket) => {
    return Basket.isAuth
})