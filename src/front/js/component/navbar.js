import React from "react";
import Logo from "../../img/Logo.png"
import "../../styles/first-navbar.css"

export const Navbar = () => {

	return (

		<>
			<nav className="">

				<div className="nav-container">

					<img src={Logo} className="logo" />

					<h2>Reel Rhapsody</h2>

				</div>

			</nav>
		</>
	);
};
