import { API } from "../api/api"
import { Dispatch } from 'redux'
import { ProductType, ReviewsType } from "../types/types"
import { RootState } from "./store"

const SET_PRODUCT = 'work/src/redux/product-reducer/SET_PRODUCT'
const TOGGLE_IS_FETCHING = 'work/src/redux/product-reducer/TOGGLE_IS_FETCHING'
const ADD_REVIEWS = 'work/src/redux/product-reducer/ADD_REVIEWS'
const DELETE_REVIEWS = 'work/src/redux/product-reducer/DELETE_REVIEWS'
const SET_REVIEWS = 'work/src/redux/product-reducer/SET_REVIEWS'

const inisialState = {
    product: {} as ProductType,
    isFetching: true,
    reviews: [] as Array<ReviewsType>
}

type ProductState = typeof inisialState

type ProductAction = SetProductACAction | ToggleIsFetchingAction | AddReviewsACAction | DeleteReviewsACAction | SetReviewsAction

const productReducer = (state = inisialState, action: ProductAction):ProductState => {
    switch (action.type) {

        case SET_PRODUCT:
            return {
                ...state, product: action.product
            }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case ADD_REVIEWS:
            let newReviews = {
                id: state.reviews.length + 1,
                review: action.values.review,
                rating: action.values.rating
            }
            return {
                ...state,
                reviews: [...state.reviews, newReviews]
            }

        case DELETE_REVIEWS:
            return {
                ...state,
                reviews: state.reviews.filter(p => p.id !== action.reviewsId)
            }

        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.reviews
            }

        default: return state
    }
}

interface SetProductACAction {
    type: typeof SET_PRODUCT
    product: ProductType
}
const setProductAC = (product: ProductType): SetProductACAction => ({ type: SET_PRODUCT, product })

interface ToggleIsFetchingAction {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAction => ({ type: TOGGLE_IS_FETCHING, isFetching })

interface AddReviewsACAction {
    type: typeof ADD_REVIEWS
    values: ReviewsType
}
const addReviewsAC = (values: ReviewsType): AddReviewsACAction => ({ type: ADD_REVIEWS, values })

interface DeleteReviewsACAction {
    type: typeof DELETE_REVIEWS
    reviewsId: number
}
export const deleteReviewsAC = (reviewsId: number): DeleteReviewsACAction => ({ type: DELETE_REVIEWS, reviewsId })

interface SetReviewsAction {
    type: typeof SET_REVIEWS
    reviews: Array<ReviewsType>
}
const setReviews = (reviews: Array<ReviewsType>): SetReviewsAction => ({ type: SET_REVIEWS, reviews })

type DispatchType = Dispatch<ProductAction>
type GetStateType = () => RootState

export const setProduct = (id: string | undefined) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true))
        const data = await API.getProduct(1, id)
        dispatch(setProductAC(data))
        const reviews = await API.getReviews(1, id)
        dispatch(setReviews(reviews))
        dispatch(toggleIsFetching(false))
    }
}

export const addReviews = (values: ReviewsType) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(addReviewsAC(values))
        const reviews = getState().Product.reviews
        await API.sendReviews(1, reviews)
    }
}

export default productReducer