import React, { useState, useRef } from "react";
import "./styles/App.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Lib from "./components/Lib";
import Nav from "./components/Nav";
import data from "./data";

const App = () => {
	const [Songs, setSongs] = useState(data());
	const [currSong, setcurrSong] = useState(Songs[0]);
	const [isPlaying, setisPlaying] = useState(false);
	const [LibOpen, setLibOpen] = useState(false);

	//uplifting state from player

	const AudioRef = useRef(null);

	const [TimeInfo, setTimeInfo] = useState({
		curr: 0,
		dur: 0,
		completedPercentage: 0,
	});

	const TimeInfoHandler = (e) => {
		const c = e.target.currentTime;
		const d = e.target.duration;

		//calc perc of song completion (for animations/css)
		const percentage = Math.round((Math.round(c) / Math.round(d)) * 100);

		setTimeInfo({ curr: c, dur: d, completedPercentage: percentage });
	};
	//

	//Handler when the song ends auto play the next one
	//no need for async/await becuse (OnEnded) event will call this method on it already loaded audio
	const SongEndHandler = () => {
		const currIndex = Songs.findIndex((song) => song.id === currSong.id);
		setcurrSong(Songs[(currIndex + 1) % Songs.length]);
	};

	return (
		<div className={`App ${LibOpen ? "Lib-active" : ""}`}>
			<Nav LibOpen={LibOpen} setLibOpen={setLibOpen} />
			<Song currSong={currSong} />
			<Player
				currSong={currSong}
				isPlaying={isPlaying}
				setisPlaying={setisPlaying}
				AudioRef={AudioRef}
				TimeInfo={TimeInfo}
				Songs={Songs}
				setSongs={setSongs}
				setcurrSong={setcurrSong}
			/>
			<Lib Songs={Songs} setcurrSong={setcurrSong} LibOpen={LibOpen} />
			<audio
				ref={AudioRef}
				src={currSong.audio}
				onTimeUpdate={TimeInfoHandler}
				onLoadedMetadata={TimeInfoHandler}
				onEnded={SongEndHandler}
			></audio>
			;
		</div>
	);
};

export default App;
