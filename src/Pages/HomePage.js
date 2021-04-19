import React, { useState, useEffect } from "react";
import PlaylistCarousel from "../Components/Playlist-Carousel";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <PlaylistCarousel
          playlistTitle={"Recently Played"}
          // playlistData={recent}
        />
        <PlaylistCarousel
          playlistTitle={"Featured Playlist"}
          // playlistData={featured}
        />
        <PlaylistCarousel
          playlistTitle={"Mood"}
          // playlistData={mood}
        />
      </div>
    </>
  );
}

export default HomePage;
