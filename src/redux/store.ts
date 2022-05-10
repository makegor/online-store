import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddlewere from "redux-thunk"

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

//@ts-ignore
window.store = store

export default store