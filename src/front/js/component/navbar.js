import React from "react";
import logoPalomitas from "../../img/palomitas.png"
import "../../styles/first-navbar.css"

export const Navbar = () => {

	return (

		<>
			<nav className="">

				<div className="nav-container">

					<img src={logoPalomitas} className="logo" />

					<h1>Reel Rhapsody</h1>

				</div>

			</nav>
		</>
	);
};
