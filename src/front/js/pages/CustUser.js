import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CustomizeUser from "../component/CustomizeUser.jsx";
import "../../styles/cust.css"

import { Context } from "../store/appContext";

export const CustUser = () => {
	return (
		<div className="container">
			<div className="container-fluid row">
				<h2 className="col-12 title">Customize</h2>
				<div><CustomizeUser/></div>
			</div>
			<br />
			<Link to="/home">
				<button className="botcust">Back Home</button>
			</Link>
		</div>
	);
};