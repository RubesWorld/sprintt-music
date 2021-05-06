import React, { useState, useEffect } from "react";
import PlaylistCarousel from "../Components/Playlist-Carousel";

import axiosWithAuth from "../util/axiosWithAuth";

function HomePage() {
  const [recent, setRecent] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [mood, setMood] = useState([]);


  //use useFetch to make code cleaner 
  // const featured = useFetch('recently_played_playlists?limit=10')

  //*calling recent API
  useEffect(() => {
    axiosWithAuth()
      .get("recently_played_playlists?limit=10")
      .then((songs) => {
        setRecent(songs.data);
      });
  }, []);
  console.log("recent", recent);
  //*calling featured API
  useEffect(() => {
    axiosWithAuth()
      .get("featured_playlists?limit=10")
      .then((songs) => {
        setFeatured(songs.data);
      });
  }, []);
  console.log("featured", featured);
  //*calling mood API
  useEffect(() => {
    axiosWithAuth()
      .get("mood_playlists?limit=10")
      .then((songs) => {
        setMood(songs.data);
      });
  }, []);
  console.log("mood", mood);

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

export default HomePage;
