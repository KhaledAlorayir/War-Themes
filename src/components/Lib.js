import React from "react";
import LibSong from "./LibSong";

const Lib = ({ Songs, setcurrSong, LibOpen }) => {
	return (
		<div className={`Lib ${LibOpen ? "open" : ""}`}>
			<h2>Library</h2>
			<div className="Lib-songs">
				{Songs.map((song) => (
					<LibSong song={song} setcurrSong={setcurrSong} key={song.id} />
				))}
			</div>
		</div>
	);
};

export default Lib;
