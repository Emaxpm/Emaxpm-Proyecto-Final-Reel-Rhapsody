import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DetailActor from "../component/DetailActor.jsx";

import { Context } from "../store/appContext";

export const VActor = () => {
	return (
		<div className="container">
			<div className="container-fluid row">
				<h2 className="col-12 title">Actor</h2>
				<div><DetailActor/></div>
			</div>
			<br />
			<Link to="/demo">
				<button className="btn btn-primary">Back Actors</button>
			</Link>
		</div>
	);
};