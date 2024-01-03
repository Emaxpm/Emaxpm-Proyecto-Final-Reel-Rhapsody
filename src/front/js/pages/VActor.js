import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DetailActor from "../component/DetailActor.jsx";

export const VActor = () => {
	return (
		<div className="container">
			<div className="">
				<h2 className="title">Actor</h2>
				<div><DetailActor/></div>
			</div>
			<br />
			<Link to="/demo">
				<button className="btn btn-primary">Back Actors</button>
			</Link>
		</div>
	);
};