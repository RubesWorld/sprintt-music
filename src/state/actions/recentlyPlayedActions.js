import axios from "axios";
import axiosWithAuth from "../../util/axiosWithAuth";

//mood action types

export const GET_RECENTLY_PLAYLIST_START = "GET_RECENTLY_PLAYLIST_START";
export const GET_RECENTLY_PLAYLIST_SUCCESS = "GET_RECENTLY_PLAYLIST_SUCCESS";
export const GET_RECENTLY_PLAYLIST_FAIL = "GET_RECENTLY_PLAYLIST_FAIL";
export const GET_RECENTLY_PLAYLIST_RESOLVE = "GET_RECENTLY_PLAYLIST_RESOLVE";

export const getRecentlyPlayedPlaylistAction = () => (dispatch) => {
  dispatch({ type: GET_RECENTLY_PLAYLIST_START });

  axiosWithAuth()
    .get("recently_played_playlists?limit=10")
    .then((res) => {
      dispatch({ type: GET_RECENTLY_PLAYLIST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_RECENTLY_PLAYLIST_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_RECENTLY_PLAYLIST_RESOLVE });
    });
};
