import React from "react";

const Song = ({ currSong }) => {
	return (
		<div className="song-cont">
			<img src={currSong.poster} alt="" />
			<h2>{currSong.name}</h2>
			<h3>{currSong.artist}</h3>
		</div>
	);
};

export default Song;
