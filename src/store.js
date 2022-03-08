import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhacer(applyMiddleware(thunk)));
export default store;
