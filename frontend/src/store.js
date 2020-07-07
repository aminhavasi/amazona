import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer } from './reducer/productReducers';
import thunk from 'redux-thunk';
const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
});
const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk))
);
export default store;
