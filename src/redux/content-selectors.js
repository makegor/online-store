import { createSelector } from "reselect"

const getState = (state) => {
    return state
}

export const getContent = createSelector(getState, (state) => {
    return state.Content.content
});

export const getIsFetching = createSelector(getState, (state) => {
    return state.Content.isFetching
});

export const getFollowingInProgress = createSelector(getState, (state) => {
    return state.Content.followingInProgress
});

export const getTotalCount = createSelector(getState, (state) => {
    return state.Content.totalCount
});

export const getPageSize = createSelector(getState, (state) => {
    return state.Content.pageSize
});

export const getCurrentPage = createSelector(getState, (state) => {
    return state.Content.currentPage
});