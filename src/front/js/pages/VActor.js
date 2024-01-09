import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DetailActor from "../component/DetailActor.jsx";

export const VActor = () => {
	return (
		<>
			<h2 className="title">Actor</h2>
			<DetailActor />
			<Link to="/demo">
				<button className="btn btn-primary">Back Actors</button>
			</Link>
		</>	
	);
};