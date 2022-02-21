import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import { authReducer } from "../reducers/AuthReducers";
import thunk from "redux-thunk"
import nominalReducer from "../reducers/nominalReducer";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const reducers = combineReducers({
    auth: authReducer,
    nominal: nominalReducer
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))