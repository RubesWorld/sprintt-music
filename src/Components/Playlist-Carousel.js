import React, { useRef, useState, useEffect } from "react";
import Playlist from "../Components/Playlist";

import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";

import axiosWithAuth from "../util/axiosWithAuth";

let playlists = [
  {
    description: "Start your day with calm and cool jazz.",
    image_url:
      "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
    name: "Jazzy Morning",
    playlist_id: "37i9dQZF1DXdziGPHNE40t",
  },
  {
    description:
      "The home for alternative electronic music. Cover: Fred again.. and The Blessed Madonna",
    image_url:
      "https://i.scdn.co/image/ab67706f0000000345e1025ae30404128c57d824",
    name: "Altar",
    playlist_id: "37i9dQZF1DXa71eg5j9dKZ",
  },
  {
    description:
      "the loose knit sweater, diy bedroom mural wall, alt milk of playlists. ✨ featuring Still Woozy",
    image_url:
      "https://i.scdn.co/image/ab67706f0000000330454e871ce5a1b00703716f",
    name: "Lorem",
    playlist_id: "37i9dQZF1DXdwmD5Q7Gxah",
  },
  {
    description: "Smooth joints. Cover: Ruti",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003cb35da286acfe287316c4640",
    name: "Butter",
    playlist_id: "37i9dQZF1DWVzZlRWgqAGH",
  },
  {
    description: "Feel great with these timelessly fun songs!",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003e649da22aa371c86c801603f",
    name: "Have a Great Day!",
    playlist_id: "37i9dQZF1DX7KNKjOK0o75",
  },
  {
    description: "Chill beats for cool coffeehouse vibes.",
    image_url:
      "https://i.scdn.co/image/ab67706f000000033f861d7f7b340e5e4934bb78",
    name: "Lo-Fi Cafe",
    playlist_id: "37i9dQZF1DX9RwfGbeGQwP",
  },
  {
    description: "Lounge and chill out music for your workday.",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003f1ecb8caee4c015b3f33058a",
    name: "Workday Lounge",
    playlist_id: "37i9dQZF1DWT5lkChsPmpy",
  },
  {
    description:
      "Curl up in your favorite spot with some sweet, mellow tunes...",
    image_url:
      "https://i.scdn.co/image/ab67706f000000035ae7aa0454c9eafdd6505fda",
    name: "Your Favorite Coffeehouse",
    playlist_id: "37i9dQZF1DX6ziVCJnEm59",
  },
  {
    description: "Chillout hip-hop vibes. Cover: Kota The Friend",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003dd2fb26650c3d75d8a32c972",
    name: "Mellow Bars",
    playlist_id: "37i9dQZF1DWT6MhXz0jw61",
  },
  {
    description: "High-Key bangers for Low-Key enjoyment.",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003c0c5bb00461fd08b95f9b9da",
    name: "Low-Key",
    playlist_id: "37i9dQZF1DX2yvmlOdMYzV",
  },
];

function PlaylistCarousel({ playlistTitle, playlistData }) {
  const [recent, setRecent] = useState("");
  const [featured, setFeatured] = useState("");
  const [mood, setMood] = useState("");

  //*calling recent API
  useEffect(() => {
    axiosWithAuth()
      .get("recently_played_playlists?limit=10")
      .then((songs) => {
        setRecent(songs.data);
      });
  }, []);

  //*calling featured API
  useEffect(() => {
    axiosWithAuth()
      .get("featured_playlists?limit=10")
      .then((songs) => {
        setFeatured(songs.data);
      });
  }, []);
  //*calling mood API
  useEffect(() => {
    axiosWithAuth()
      .get("mood_playlists?limit=10")
      .then((songs) => {
        setMood(songs.data);
      });
  }, []);

  const playlistRef = useRef();

  //*add a class to the div to the container for playlist
  //*change the position of the
  //*use css transitions to move
  const prevClick = () => {
    if (playlistRef) {
      console.log(playlistRef.current);
      playlistRef.current.scrollBy({
        top: 200,
        left: -1300,
        behavior: "smooth",
      });
    }
  };

  const nextClick = () => {
    if (playlistRef) {
      console.log(playlistRef.current);
      playlistRef.current.scrollBy({
        top: 200,
        left: 1300,
        behavior: "smooth",
      });
    }
  };

  const disabled = () => {
    if (playlistData.playlists.length < 6) {
      return true;
    } else {
      return false;
    }
  };

  const toggleArrows = () => {};

  return (
    <>
      <div>
        <div className="playlist-carousel">
          <div className="top">
            <h3>{playlistTitle}</h3>
            <div className="icons">
              <img
                src={left}
                alt=""
                className={`arrow ${disabled === true ? " disabled" : ""}`}
                onClick={prevClick}
              />
              <img
                src={right}
                alt=""
                className={`arrow ${disabled === true ? " disabled" : ""}`}
                onClick={nextClick}
              />
            </div>
          </div>
          <div className="carousel" ref={playlistRef}>
            <div className="playlist-container">
              {playlists.length > 0 &&
                playlists.map((tab, index) => {
                  return <Playlist playlists={tab} key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaylistCarousel;
