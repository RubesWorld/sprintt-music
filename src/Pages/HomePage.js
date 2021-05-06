import React, { useState, useEffect } from "react";
import PlaylistCarousel from "../Components/Playlist-Carousel";
import { connect } from "react-redux";

import {
  getMoodPlaylistAction,
  getRecentlyPlayedPlaylistAction,
  getFeaturedPlaylistAction,
} from "../state/actions";

// import axiosWithAuth from "../util/axiosWithAuth";

function HomePage({
  getMoodPlaylistAction,
  getRecentlyPlayedPlaylistAction,
  getFeaturedPlaylistAction,
  mood,
  recent,
  featured,
}) {
  // const [recent, setRecent] = useState([]);
  // const [featured, setFeatured] = useState([]);
  // const [mood, setMood] = useState([]);

  useEffect(() => {
    getMoodPlaylistAction();
    getRecentlyPlayedPlaylistAction();
    getFeaturedPlaylistAction();
  }, []);

  console.log("mood", mood);
  console.log("recently", recent);
  console.log("featured", featured);

  //use useFetch to make code cleaner
  // const featured = useFetch('recently_played_playlists?limit=10')

  // //*calling recent API
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("recently_played_playlists?limit=10")
  //     .then((songs) => {
  //       setRecent(songs.data);
  //     });
  // }, []);
  // console.log("recent", recent);
  // //*calling featured API
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("featured_playlists?limit=10")
  //     .then((songs) => {
  //       setFeatured(songs.data);
  //     });
  // }, []);
  // console.log("featured", featured);
  // //*calling mood API
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("mood_playlists?limit=10")
  //     .then((songs) => {
  //       setMood(songs.data);
  //     });
  // }, []);
  // console.log("mood", mood);

  return (
    <>
      <div className="home-container">
        <PlaylistCarousel
          playlistTitle={"Recently Played"}
          playlistData={recent}
        />
        <PlaylistCarousel
          playlistTitle={"Featured Playlist"}
          playlistData={featured}
        />
        <PlaylistCarousel playlistTitle={"Mood"} playlistData={mood} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    mood: state.mood.moodPlaylist,
    recent: state.recentlyPlayed.recentlyPlayedPlaylist,
    featured: state.featured.featuredPlaylist,
  };
};

export default connect(mapStateToProps, {
  getMoodPlaylistAction,
  getRecentlyPlayedPlaylistAction,
  getFeaturedPlaylistAction,
})(HomePage);
