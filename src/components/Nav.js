import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ LibOpen, setLibOpen }) => {
	return (
		<nav>
			<h1>WAR Themes</h1>
			<button onClick={() => setLibOpen(!LibOpen)}>
				Library
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	);
};

export default Nav;
