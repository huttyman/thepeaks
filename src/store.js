import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { bookmarkReducer } from "./reducers/bookmarkReducer";

const initialState = {
    bookmark: {
        bookmarkItems: localStorage.getItem("bookmarkItems")
            ? JSON.parse(localStorage.getItem("bookmarkItems"))
            : [],
    },
};
const reducer = combineReducers({
    bookmark: bookmarkReducer,
});

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composerEnhancer(applyMiddleware(thunk))
);

export default store;
