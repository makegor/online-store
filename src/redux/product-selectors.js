import { createSelector } from "reselect"

const getState = (state) => {
    return state
}

export const getProduct = createSelector(getState, (state) => {
    return state.Product.product
});

export const getIsFetching = createSelector(getState, (state) => {
    return state.Product.isFetching
});

export const getReviews = createSelector(getState, (state) => {
    return state.Product.reviews
});