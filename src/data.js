import { v4 as uuidv4 } from "uuid";

const data = () => {
	return [
		{
			name: "Mission Blow",
			artist: "Yuji Nagata",
			audio: "/media/Nagata.mp3",
			poster: "https://pbs.twimg.com/media/E0eAYlMVkAUhYyv?format=jpg",
			color: ["#4965ff", "#0f32fc"],
			active: true,
			id: uuidv4(),
		},
		{
			name: "Thunder Storm",
			artist: "Genichiro Tenryu",
			audio: "/media/tenru.mp3",
			poster:
				"https://www.voicesofwrestling.com/wp-content/uploads/2020/05/tenryuuuuuuuuuu.png",
			color: ["#0E0E0E", "#BFC48A"],
			active: false,
			id: uuidv4(),
		},
		{
			name: "Sunrise",
			artist: "Stan Hansen",
			audio: "/media/stan.mp3",
			poster: "/media/stan.png",
			color: ["#1F2F3C", "#1E2934"],
			active: false,
			id: uuidv4(),
		},

		{
			name: "Kaze Ni Nare",
			artist: "Minoru Suzuki",
			audio: "/media/suzuki.mp3",
			poster:
				"https://cdn3.whatculture.com/images/2019/10/adcb0dd01f7888ce-1200x675.jpg",
			color: ["#3E363B", "#5E5152"],
			active: false,
			id: uuidv4(),
		},
		{
			name: "Wild Thing",
			artist: "Jon Moxley",
			audio: "/media/mox.mp3",
			poster: "https://pbs.twimg.com/media/Eyjb42iW8AYuZEN?format=jpg",
			color: ["#8B020B", "#3D0609"],
			active: false,
			id: uuidv4(),
		},
		{
			name: "Right Above it",
			artist: "Daniel Cormier",
			audio: "/media/dc.mp3",
			poster: "/media/dc.png",
			color: ["#D4AF37", "#211d1e"],
			active: false,
			id: uuidv4(),
		},
	];
};

export default data;
