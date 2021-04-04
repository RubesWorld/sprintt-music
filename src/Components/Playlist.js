import React from "react";

function Playlist(props) {
  const { playlists } = props;
  return (
    <div className="playlist">
      <img src={playlists.image_url} alt="" className="cover" />
      <p className="title">{playlists.name}</p>
      <p className="description">{playlists.description}</p>
    </div>
  );
}

export default Playlist;
