import {
  GET_FEATURED_PLAYLIST_START,
  GET_FEATURED_PLAYLIST_SUCCESS,
  GET_FEATURED_PLAYLIST_FAIL,
  GET_FEATURED_PLAYLIST_RESOLVE,
} from "../actions/featuredActions";

export const initialFeaturedState = {
  featuredPlaylist: [],
  status: "",
};

export const featuredReducer = (state = initialFeaturedState, action) => {
  switch (action.type) {
    case GET_FEATURED_PLAYLIST_START:
      return {
        ...state,
        status: "Pending...",
      };
    case GET_FEATURED_PLAYLIST_SUCCESS:
      return {
        ...state,
        status: "Success",
      };
    case GET_FEATURED_PLAYLIST_FAIL:
      return {
        ...state,
        status: "Failed",
      };
    case GET_FEATURED_PLAYLIST_RESOLVE:
      return {
        ...state,
        status: "Resolved",
      };
    default:
      return state;
  }
};
