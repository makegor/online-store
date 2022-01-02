import { API } from "../api/api";

const SET_CONTENT = 'work/src/redux/content-reducer/SET_CONTENT';
const TOGGLE_IS_FETCHING = 'work/src/redux/content-reducer/TOGGLE_IS_FETCHING';
const ADD_PRODUCT = 'work/src/redux/content-reducer/ADD_PRODUCT';
const DELETE_PRODUCT = 'work/src/redux/content-reducer/DELETE_PRODUCT';
const MINUS_PRODUCT = 'work/src/redux/content-reducer/MINUS_PRODUCT';
const PLUS_PRODUCT = 'work/src/redux/content-reducer/PLUS_PRODUCT';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'work/src/redux/content-reducer/TOGGLE_IS_FOLLOWING_PROGRESS';
const CHANGE_PAGE = 'work/src/redux/content-reducer/CHANGE_PAGE';
const SET_TOTAL_COUNT = 'work/src/redux/content-reducer/SET_TOTAL_COUNT';

let inisialState = {
    content: [],
    isFetching: true,
    followingInProgress: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
};

const contentReducer = (state = inisialState, action) => {
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
                        return { ...product, followed: true, summ: 1 };
                    return product;
                })
                /*...state,
                basket: [...state.basket, ...state.content.filter(product => {
                    if ((product.id === action.Id) && (product.photo))
                        return { ...product, followed: true, summ: 1};
                })]*/
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                content: state.content.map(product => {
                    if (product.id === action.Id)
                        return { ...product, followed: false, summ: 0 };
                    return product;
                })
                /*...state,
                basket: state.basket.filter(product => {
                    if (product.id !== action.Id)
                        //return { ...product, followed: false, summ: 0 };
                        return product;
                })*/
            }

        case MINUS_PRODUCT:
            return {
                ...state,
                content: state.content.map(product => {
                    if (product.id === action.Id) {
                        if (product.summ > 1) { product.summ--; }
                        else return { ...product, followed: false, summ: 0 };
                    }
                    return product;
                })
            }

        case PLUS_PRODUCT:

            return {
                ...state,
                content: state.content.map(product => {
                    if (product.id === action.Id) { product.summ++; }
                    return product;
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

        default: return state;
    }
}

const setContent = (content) => ({ type: SET_CONTENT, content });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
const toggleFollowingProgress = (isFetching, Id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, Id });
const addProductSuccess = (Id) => ({ type: ADD_PRODUCT, Id });
const deleteProductSuccess = (Id) => ({ type: DELETE_PRODUCT, Id });
const minusSuccess = (Id) => ({ type: MINUS_PRODUCT, Id });
const plusSuccess = (Id) => ({ type: PLUS_PRODUCT, Id });
const setTotalCount = (total) => ({ type: SET_TOTAL_COUNT, total });
const changePage = (page) => ({ type: CHANGE_PAGE, page });

export const setContentThunk = (sexId, currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await API.getContent(1, sexId, currentPage, pageSize);
        dispatch(setContent(data.data));
        dispatch(setTotalCount(data.totalCount));
        dispatch(changePage(currentPage));
        dispatch(toggleIsFetching(false));
    }
}

export const addProduct = (Id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, Id));
        let resultCode = await API.addProduct(1, Id);
        if (resultCode === 0) {
            dispatch(addProductSuccess(Id));
            dispatch(toggleFollowingProgress(false, Id));
        }
    }
}

export const deleteProduct = (Id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, Id));
        let resultCode = await API.deleteProduct(1, Id);
        if (resultCode === 0) {
            dispatch(deleteProductSuccess(Id));
            dispatch(toggleFollowingProgress(false, Id));
        }
    }
}

export const minusProduct = (Id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, Id));
        let resultCode = await API.minusProduct(1, Id);
        if (resultCode === 0) {
            dispatch(minusSuccess(Id));
            dispatch(toggleFollowingProgress(false, Id));
        }
    }
}

export const plusProduct = (Id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, Id));
        let resultCode = await API.plusProduct(1, Id);
        if (resultCode === 0) {
            dispatch(plusSuccess(Id));
            dispatch(toggleFollowingProgress(false, Id));
        }
    }
}

export default contentReducer;