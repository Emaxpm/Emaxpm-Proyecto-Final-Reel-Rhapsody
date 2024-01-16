import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DetailActor from "../component/DetailActor.jsx";
import "../../styles/details.css"

export const VActor = () => {
	return (
		<>
			<h2 className="title">Actor</h2>
			<DetailActor />
			<Link to="/demo">
				<button className="btn back-home info-buton ms-5 mt-3 mb-3">Back Actors</button>
			</Link>
		</>	
	);
};