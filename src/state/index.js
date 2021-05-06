import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import logger from "redux-logger";
import {
  featuredReducer,
  moodReducer,
  recentlyPlayedReducer,
} from "./reducers";

export const rootReducer = combineReducers({
  mood: moodReducer,
  featured: featuredReducer,
  recentlyPlayed: recentlyPlayedReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
