import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Actors from "../component/Actors.jsx";

import { Context } from "../store/appContext";

export const Demo = () => {
	return (
		<div className="container">
			<div className="container-fluid row">
				<h2 className="col-12 title">Actors</h2>
				<div><Actors/></div>
			</div>
			<br />
			<Link to="/home">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
