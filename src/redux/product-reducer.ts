import { API } from "../api/api"
import { ProductType, ReviewsType } from "../types/types"
import { BaseThunkType, InferActionsTypes } from "./store"

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

type ProductAction = InferActionsTypes<typeof actionsProduct>
type ThunkType = BaseThunkType<ProductAction>

const productReducer = (state = inisialState, action: ProductAction): ProductState => {
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

export const actionsProduct = {
    setProductAC: (product: ProductType) => ({ type: SET_PRODUCT, product } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
    addReviewsAC: (values: ReviewsType) => ({ type: ADD_REVIEWS, values } as const),
    deleteReviewsAC: (reviewsId: number) => ({ type: DELETE_REVIEWS, reviewsId } as const),
    setReviews: (reviews: Array<ReviewsType>) => ({ type: SET_REVIEWS, reviews } as const),
}

export const setProduct = (id: string | undefined):ThunkType => {
    return async (dispatch) => {
        dispatch(actionsProduct.toggleIsFetching(true))
        const data = await API.getProduct(1, id)
        dispatch(actionsProduct.setProductAC(data))
        const reviews = await API.getReviews(1, id)
        dispatch(actionsProduct.setReviews(reviews))
        dispatch(actionsProduct.toggleIsFetching(false))
    }
}

export const addReviews = (values: ReviewsType):ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actionsProduct.addReviewsAC(values))
        const reviews = getState().Product.reviews
        await API.sendReviews(1, reviews)
    }
}

export default productReducer