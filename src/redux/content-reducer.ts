import { API } from "../api/api"
import { ProductType } from "../types/types"
import { BaseThunkType, InferActionsTypes } from "./store"
import { actionsProduct } from "./product-reducer"
import { actionsBasket } from "./basket-reducer"

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
    pageSize: 12,
    totalCount: 0,
    currentPage: 1
}

type ContentAction = InferActionsTypes<typeof actionsContent>
type ProductActionTypes = InferActionsTypes<typeof actionsProduct>
type BasketActionTypes = InferActionsTypes<typeof actionsBasket>
type ThunkType = BaseThunkType<ContentAction | ProductActionTypes | BasketActionTypes>

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


export const actionsContent = {
    setContent: (content: Array<ProductType>) => ({ type: SET_CONTENT, content } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, Id: string) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, Id } as const),
    addProductSuccess: (Id: string) => ({ type: ADD_PRODUCT, Id } as const),
    deleteProductSuccess: (Id: string) => ({ type: DELETE_PRODUCT, Id } as const),
    minusSuccess: (Id: string) => ({ type: MINUS_PRODUCT, Id } as const),
    plusSuccess: (Id: string) => ({ type: PLUS_PRODUCT, Id } as const),
    setTotalCount: (total: number) => ({ type: SET_TOTAL_COUNT, total } as const),
    changePage: (page: number) => ({ type: CHANGE_PAGE, page } as const),
}

export const setContentThunk = (sexId: string | undefined, currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actionsContent.toggleIsFetching(true))
        let data = await API.getContent(1, sexId, currentPage, pageSize)
        dispatch(actionsContent.setContent(data.data))
        dispatch(actionsContent.setTotalCount(data.totalCount))
        dispatch(actionsContent.changePage(currentPage))
        dispatch(actionsContent.toggleIsFetching(false))
    }
}

export const addProduct = (Id: string): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actionsContent.toggleFollowingProgress(true, Id))
        const resultCode = await API.addProduct(Id)
        if (resultCode === 0) {
            dispatch(actionsContent.addProductSuccess(Id))
            const product = await API.getProduct(1, Id)
            dispatch(actionsProduct.setProductAC(product))
        }
        dispatch(actionsContent.toggleFollowingProgress(false, Id))
    }
}

export const deleteProduct = (Id: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actionsContent.toggleFollowingProgress(true, Id))
        let resultCode = await API.deleteProduct(1, Id)
        if (resultCode === 0) {
            dispatch(actionsContent.deleteProductSuccess(Id))
            const product = await API.getProduct(1, Id)
            dispatch(actionsProduct.setProductAC(product))
            const basket = await API.getBasket(2)
            dispatch(actionsBasket.setBasketAC(basket))
            dispatch(actionsContent.toggleFollowingProgress(false, Id))
        }
    }
}

export const minusProduct = (Id: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actionsContent.toggleFollowingProgress(true, Id))
        let resultCode = await API.minusProduct(1, Id)
        if (resultCode === 0) {
            dispatch(actionsContent.minusSuccess(Id))
            const product = await API.getProduct(1, Id)
            dispatch(actionsProduct.setProductAC(product))
            dispatch(actionsContent.toggleFollowingProgress(false, Id))
        }
    }
}

export const plusProduct = (Id: string): ThunkType => {
    return async (dispatch) => {
        dispatch(actionsContent.toggleFollowingProgress(true, Id))
        let resultCode = await API.plusProduct(1, Id)
        if (resultCode === 0) {
            dispatch(actionsContent.plusSuccess(Id))
            const product = await API.getProduct(1, Id)
            dispatch(actionsProduct.setProductAC(product))
            dispatch(actionsContent.toggleFollowingProgress(false, Id))
        }
    }
}

export default contentReducer