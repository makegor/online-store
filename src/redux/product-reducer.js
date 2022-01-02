import { API } from "../api/api";
//import { toggleIsFetching } from "./content-reducer";

const SET_PRODUCT = 'work/src/redux/product-reducer/SET_PRODUCT';
const TOGGLE_IS_FETCHING = 'work/src/redux/product-reducer/TOGGLE_IS_FETCHING';
const ADD_REVIEWS = 'work/src/redux/product-reducer/ADD_REVIEWS';
const DELETE_REVIEWS = 'work/src/redux/product-reducer/DELETE_REVIEWS';
const SET_REVIEWS = 'work/src/redux/product-reducer/SET_REVIEWS';

let inisialState = {
    product: [],
    isFetching: true,
    reviews: []
};

const productReducer = (state = inisialState, action) => {
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
                message: action.values.NewPostText,
                rating: action.values.rating
            };
            return {
                ...state,
                ...state.product,
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

        default: return state;
    }
}

const setProductAC = (product) => ({ type: SET_PRODUCT, product });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
const addReviewsAC = (values) => ({ type: ADD_REVIEWS, values });
export const deleteReviewsAC = (reviewsId) => ({ type: DELETE_REVIEWS, reviewsId });
const setReviews = (reviews) => ({ type: SET_REVIEWS, reviews });

export const setProduct = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await API.getProduct(1, id);
        dispatch(setProductAC(data));
        const reviews = await API.getReviews(1, id);
        dispatch(setReviews(reviews));
        dispatch(toggleIsFetching(false));
    }
}

export const addReviews = (values) => {
    return async (dispatch, getState) => {
        dispatch(addReviewsAC(values));
        const reviews = getState().Product.reviews;
        await API.sendReviews(1, reviews);
    }
}

export default productReducer;