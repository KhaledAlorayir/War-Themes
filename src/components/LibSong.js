import React from "react";

const LibSong = ({ song, setcurrSong }) => {
	const PlaySongHandler = async () => {
		//await till song is loaded (audio bs)
		await setcurrSong(song);
	};

	return (
		<div
			className={`Lib-song ${song.active ? "selected" : ""}`}
			onClick={PlaySongHandler}
		>
			<img src={song.poster} alt="" />
			<div className="song-desc">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibSong;
