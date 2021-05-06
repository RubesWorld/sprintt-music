import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import logger from "redux-logger";

export const rootReducer = combineReducers({
    
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
