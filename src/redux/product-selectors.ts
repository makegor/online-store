import { createSelector } from "reselect"
import { RootState } from "./store"

const getState = (state: RootState) => {
    return state.Product
}

export const getProduct = createSelector(getState, (Product) => {
    return Product.product
})

export const getIsFetching = createSelector(getState, (Product) => {
    return Product.isFetching
})

export const getReviews = createSelector(getState, (Product) => {
    return Product.reviews
})