import React from "react";
import Home from "../assets/home_icon.png";
import Liked from "../assets/liked_songs_icon.png";
import Browse from "../assets/browse_icon.png";

const NavBarData = [
  {
    title: "Home",
    path: "/",
    icon: Home,
    className: "text-box",
  },
  {
    title: "Browse",
    path: "/browse",
    icon: Liked,
    className: "text-box",
  },
  {
    title: "Liked songs",
    path: "liked-songs",
    icon: Browse,
    className: "text-box",
  },
];

export default NavBarData;
