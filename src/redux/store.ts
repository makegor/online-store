import { Action, applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddlewere, { ThunkAction } from "redux-thunk"

import contentReducer from "./content-reducer"
import productReducer from "./product-reducer"
import basketReducer from "./basket-reducer"
import authReducer from "./auth-reducer"

const rootReducer = combineReducers({
    Content: contentReducer,
    Product: productReducer,
    Basket: basketReducer,
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddlewere))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>

//@ts-ignore
window.store = store

export default store