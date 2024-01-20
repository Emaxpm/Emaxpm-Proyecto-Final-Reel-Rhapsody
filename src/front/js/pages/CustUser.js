import React, { useState, useEffect, useContext } from "react";
import CustomizeUser from "../component/CustomizeUser.jsx";
import "../../styles/cust.css"

export const CustUser = () => {
	return (
		<div className="container">
			<h2 className="title">Customize</h2>
			<div><CustomizeUser /></div>
		</div>
	);
};