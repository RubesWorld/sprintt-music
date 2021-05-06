import {
  GET_RECENTLY_PLAYLIST_START,
  GET_RECENTLY_PLAYLIST_SUCCESS,
  GET_RECENTLY_PLAYLIST_FAIL,
  GET_RECENTLY_PLAYLIST_RESOLVE,
} from "../actions/recentlyPlayedActions";

export const initialRecentlyPlayedState = {
  recentlyPlayedPlaylist: [],
  status: "",
};

export const recentlyPlayedReducer = (
  state = initialRecentlyPlayedState,
  action
) => {
  switch (action.type) {
    case GET_RECENTLY_PLAYLIST_START:
      return {
        ...state,
        status: "Pending...",
      };
    case GET_RECENTLY_PLAYLIST_SUCCESS:
      return {
        ...state,
        status: "Success",
      };
    case GET_RECENTLY_PLAYLIST_FAIL:
      return {
        ...state,
        status: "Failed",
      };
    case GET_RECENTLY_PLAYLIST_RESOLVE:
      return {
        ...state,
        status: "Resolved",
      };
    default:
      return state;
  }
};
