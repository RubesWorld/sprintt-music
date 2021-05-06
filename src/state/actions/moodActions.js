import axiosWithAuth from "../../util/axiosWithAuth";

//mood action types

export const GET_MOOD_PLAYLIST_START = "GET_MOOD_PLAYLIST_START";
export const GET_MOOD_PLAYLIST_SUCCESS = "GET_MOOD_PLAYLIST_SUCCESS";
export const GET_MOOD_PLAYLIST_FAIL = "GET_MOOD_PLAYLIST_FAIL";
export const GET_MOOD_PLAYLIST_RESOLVE = "GET_MOOD_PLAYLIST_RESOLVE";

export const getMoodPlaylistAction = () => (dispatch) => {
  dispatch({ type: GET_MOOD_PLAYLIST_START });

  axiosWithAuth()
    .get("mood_playlists?limit=10")
    .then((res) => {
      dispatch({ type: GET_MOOD_PLAYLIST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_MOOD_PLAYLIST_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_MOOD_PLAYLIST_RESOLVE });
    });
};
