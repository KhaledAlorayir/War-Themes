import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
	currSong,
	isPlaying,
	setisPlaying,
	AudioRef,
	TimeInfo,
	Songs,
	setSongs,
	setcurrSong,
}) => {
	const PlaySongHandler = () => {
		if (isPlaying) {
			AudioRef.current.pause();
			setisPlaying(!isPlaying);
		} else {
			AudioRef.current.play();
			setisPlaying(!isPlaying);
		}
	};

	const TimeFormater = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	const DragHandler = (e) => {
		AudioRef.current.currentTime = e.target.value;
	};
	//await till song is loaded before playing it (audio bs)
	const ChangeSongHandler = async (dir) => {
		//get the index of the curr song
		let CurrIndex = Songs.findIndex((item) => item.id === currSong.id);
		//if right set curr song to the next one etc.... moudle to make array circlur
		if (dir === "Right") {
			await setcurrSong(Songs[(CurrIndex + 1) % Songs.length]);
		} else if (dir === "Left") {
			if ((CurrIndex - 1) % Songs.length === -1) {
				await setcurrSong(Songs[Songs.length - 1]);
			} else {
				await setcurrSong(Songs[(CurrIndex - 1) % Songs.length]);
			}
		}
	};

	// will triger when curr song changes, wheter its from autoPlay or change from lib or skip-forawrd and back(when cuursong state changes)
	//will set the song to active(css propsess) and play it auto if the one before it was playing
	const AfterChangeSongHandler = () => {
		setSongs(
			Songs.map((item) => {
				if (item.id === currSong.id) {
					return {
						...item,
						active: true,
					};
				} else {
					return {
						...item,
						active: false,
					};
				}
			})
		);

		if (isPlaying) {
			AudioRef.current.play();
		}
	};

	useEffect(AfterChangeSongHandler, [currSong]);

	//css track animation completedPercentage

	const trackCSS = {
		transform: `translateX(${TimeInfo.completedPercentage}%)`,
	};

	const ColorCSS = {
		background: `linear-gradient(to right , ${currSong.color[0]} , ${currSong.color[1]})`,
	};

	return (
		<div className="player-cont">
			<div className="slider">
				<p>{TimeFormater(TimeInfo.curr)}</p>
				<div className="track" style={ColorCSS}>
					<input
						value={TimeInfo.curr}
						type="range"
						max={TimeInfo.dur || 0}
						min={0}
						onChange={DragHandler}
					/>
					<div className="animate-track" style={trackCSS}></div>
				</div>
				<p>{TimeFormater(TimeInfo.dur)}</p>
			</div>
			<div className="controls">
				<FontAwesomeIcon
					icon={faAngleLeft}
					className="left-c"
					size="2x"
					onClick={() => ChangeSongHandler("Left")}
				/>
				<FontAwesomeIcon
					icon={isPlaying ? faPause : faPlay}
					className="mid-c"
					size="2x"
					onClick={PlaySongHandler}
				/>
				<FontAwesomeIcon
					icon={faAngleRight}
					className="right-c"
					size="2x"
					onClick={() => ChangeSongHandler("Right")}
				/>
			</div>
		</div>
	);
};

export default Player;
