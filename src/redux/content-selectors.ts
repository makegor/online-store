import { createSelector } from "reselect"
import { RootState } from "./store"

const getState = (state: RootState) => {
    return state.Content
}

export const getContent = createSelector(getState, (Content) => {
    return Content.content
})

export const getIsFetching = createSelector(getState, (Content) => {
    return Content.isFetching
})

export const getFollowingInProgress = createSelector(getState, (Content) => {
    return Content.followingInProgress
})

export const getTotalCount = createSelector(getState, (Content) => {
    return Content.totalCount
})

export const getPageSize = createSelector(getState, (Content) => {
    return Content.pageSize
})

export const getCurrentPage = createSelector(getState, (Content) => {
    return Content.currentPage
})