import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Actors from "../component/Actors.jsx";


export const Demo = () => {
	return (
		<>
			<div><Actors /></div>
			<Link to="/" className="back-home">
				<button className="info-buton">Back home</button>
		</Link>
		</>
	);
};
