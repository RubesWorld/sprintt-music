import axiosWithAuth from "../../util/axiosWithAuth";

//mood action types

export const GET_FEATURED_PLAYLIST_START = "GET_FEATURED_PLAYLIST_START";
export const GET_FEATURED_PLAYLIST_SUCCESS = "GET_FEATURED_PLAYLIST_SUCCESS";
export const GET_FEATURED_PLAYLIST_FAIL = "GET_FEATURED_PLAYLIST_FAIL";
export const GET_FEATURED_PLAYLIST_RESOLVE = "GET_FEATURED_PLAYLIST_RESOLVE";

export const getFeaturedPlaylistAction = () => (dispatch) => {
  dispatch({ type: GET_FEATURED_PLAYLIST_START });

  axiosWithAuth()
    .get("featured_playlists?limit=10")
    .then((res) => {
      dispatch({ type: GET_FEATURED_PLAYLIST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_FEATURED_PLAYLIST_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_FEATURED_PLAYLIST_RESOLVE });
    });
};
