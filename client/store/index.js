import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import cart from "./cart";
import singleProduct from "./singleProduct";
import singleUser from "./singleUser";
import multipleProducts from "./multipleProducts";
import users from "./users"
import {  } from "./changeProducts"

const reducer = combineReducers({ auth, cart, singleProduct, singleUser, multipleProducts, users });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
export * from "./cart";
export * from "./singleProduct";
export * from "./singleUser";
export * from "./users"
export * from "./changeProducts"