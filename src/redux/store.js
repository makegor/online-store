import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddlewere from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import contentReducer from "./content-reducer";
import productReducer from "./product-reducer";
import basketReducer from "./basket-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    Content: contentReducer,
    Product: productReducer,
    Basket: basketReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddlewere));

window.store = store;
export default store;