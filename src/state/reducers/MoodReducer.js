import {
  GET_MOOD_PLAYLIST_START,
  GET_MOOD_PLAYLIST_SUCCESS,
  GET_MOOD_PLAYLIST_FAIL,
  GET_MOOD_PLAYLIST_RESOLVE,
} from "../actions/moodActions";

export const initialMoodState = {
  moodPlaylist: [],
  status: "",
};

export const moodReducer = (state = initialMoodState, action) => {
  switch (action.type) {
    case GET_MOOD_PLAYLIST_START:
      return {
        ...state,
        status: "Pending...",
      };
    case GET_MOOD_PLAYLIST_SUCCESS:
      return {
        ...state,
        status: "Success",
      };
    case GET_MOOD_PLAYLIST_FAIL:
      return {
        ...state,
        status: "Failed",
      };
    case GET_MOOD_PLAYLIST_RESOLVE:
      return {
        ...state,
        status: "Resolved",
      };
    default:
      return state;
  }
};
