import { API } from "../api/api"
import { ThunkAction } from "redux-thunk"
import { ProductType } from "../types/types"

const SET_CONTENT = 'work/src/redux/content-reducer/SET_CONTENT'
const TOGGLE_IS_FETCHING = 'work/src/redux/content-reducer/TOGGLE_IS_FETCHING'
const ADD_PRODUCT = 'work/src/redux/content-reducer/ADD_PRODUCT'
const DELETE_PRODUCT = 'work/src/redux/content-reducer/DELETE_PRODUCT'
const MINUS_PRODUCT = 'work/src/redux/content-reducer/MINUS_PRODUCT'
const PLUS_PRODUCT = 'work/src/redux/content-reducer/PLUS_PRODUCT'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'work/src/redux/content-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'
const CHANGE_PAGE = 'work/src/redux/content-reducer/CHANGE_PAGE'
const SET_TOTAL_COUNT = 'work/src/redux/content-reducer/SET_TOTAL_COUNT'

export interface ContentState {
    content: Array<ProductType>,
    isFetching: boolean,
    followingInProgress: Array<string>, //array of product id
    pageSize: number,
    totalCount: number,
    currentPage: number
}

const inisialState = {
    content: [] as Array<ProductType>,
    isFetching: true,
    followingInProgress: [] as Array<string>,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
}

type ContentAction = SetContentAction | ToggleIsFetchingAction | ToggleFollowingProgressAction | AddProductSuccessAction | DeleteProductSuccessAction | MinusSuccessAction | PlusSuccessAction | SetTotalCountAction | ChangePageAction

type ThunkType = ThunkAction<Promise<void>, ContentState, unknown, ContentAction>

const contentReducer = (state = inisialState, action: ContentAction): ContentState => {
    switch (action.type) {

        case SET_CONTENT:
            return {
                ...state, content: action.content
            }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.Id]
                    : state.followingInProgress.filter(id => id !== action.Id)

            }

        case ADD_PRODUCT:
            return {
                ...state,
                content: state.content.map(product => {
                    if (product.id === action.Id)
                        return { ...product, added: true, summ: 1 }
                    return product
                })
                /*...state,
                basket: [...state.basket, ...state.content.filter(product => {
                    if ((product.id === action.Id) && (product.photo))
                        return { ...product, added: true, summ: 1}
                })]*/
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                content: state.content.map(product => {
                    if (product.id === action.Id)
                        return { ...product, added: false, summ: 0 }
                    return product
                })
                /*...state,
                basket: state.basket.filter(product => {
                    if (product.id !== action.Id)
                        return { ...product, added: false, summ: 0 }
                        return product
                })*/
            }

        case MINUS_PRODUCT:
            return {
                ...state,
                content: state.content.map(product => {
                    if (product.id === action.Id) {
                        if (product.summ > 1) { product.summ-- }
                        else return { ...product, added: false, summ: 0 }
                    }
                    return product
                })
            }

        case PLUS_PRODUCT:
            return {
                ...state,
                content: state.content.map(product => {
                    if (product.id === action.Id) {
                        if (product.summ > 0) { product.summ++ }
                        else return { ...product, added: true, summ: 1 }
                    }
                    return product
                })
            }

        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.total
            }

        case CHANGE_PAGE:
            return {
                ...state, currentPage: action.page
            }

        default: return state
    }
}


interface SetContentAction {
    type: typeof SET_CONTENT
    content: Array<ProductType>
}
const setContent = (content: Array<ProductType>): SetContentAction => ({ type: SET_CONTENT, content })

interface ToggleIsFetchingAction {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAction => ({ type: TOGGLE_IS_FETCHING, isFetching })

interface ToggleFollowingProgressAction {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    Id: string
}
export const toggleFollowingProgress = (isFetching: boolean, Id: string): ToggleFollowingProgressAction => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, Id })

interface AddProductSuccessAction {
    type: typeof ADD_PRODUCT
    Id: string
}
export const addProductSuccess = (Id: string): AddProductSuccessAction => ({ type: ADD_PRODUCT, Id })

interface DeleteProductSuccessAction {
    type: typeof DELETE_PRODUCT
    Id: string
}
export const deleteProductSuccess = (Id: string): DeleteProductSuccessAction => ({ type: DELETE_PRODUCT, Id })

interface MinusSuccessAction {
    type: typeof MINUS_PRODUCT
    Id: string
}
export const minusSuccess = (Id: string): MinusSuccessAction => ({ type: MINUS_PRODUCT, Id })

interface PlusSuccessAction {
    type: typeof PLUS_PRODUCT
    Id: string
}
export const plusSuccess = (Id: string): PlusSuccessAction => ({ type: PLUS_PRODUCT, Id })

interface SetTotalCountAction {
    type: typeof SET_TOTAL_COUNT
    total: number
}
const setTotalCount = (total: number): SetTotalCountAction => ({ type: SET_TOTAL_COUNT, total })

interface ChangePageAction {
    type: typeof CHANGE_PAGE
    page: number
}
const changePage = (page: number): ChangePageAction => ({ type: CHANGE_PAGE, page })


export const setContentThunk = (sexId: string | undefined, currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await API.getContent(1, sexId, currentPage, pageSize)
        dispatch(setContent(data.data))
        dispatch(setTotalCount(data.totalCount))
        dispatch(changePage(currentPage))
        dispatch(toggleIsFetching(false))
    }
}

export const addProduct = (Id: string): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, Id))
        const resultCode = await API.addProduct(Id)
        if (resultCode === 0) {
            dispatch(addProductSuccess(Id))
        }
        dispatch(toggleFollowingProgress(false, Id))
    }
}

export const deleteProduct = (Id: string): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, Id))
        let resultCode = await API.deleteProduct(1, Id)
        if (resultCode === 0) {
            dispatch(deleteProductSuccess(Id))
            dispatch(toggleFollowingProgress(false, Id))
        }
    }
}

export const minusProduct = (Id: string): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, Id))
        let resultCode = await API.minusProduct(1, Id)
        if (resultCode === 0) {
            dispatch(minusSuccess(Id))
            dispatch(toggleFollowingProgress(false, Id))
        }
    }
}

export const plusProduct = (Id: string): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, Id))
        let resultCode = await API.plusProduct(1, Id)
        if (resultCode === 0) {
            dispatch(plusSuccess(Id))
            dispatch(toggleFollowingProgress(false, Id))
        }
    }
}

export default contentReducer