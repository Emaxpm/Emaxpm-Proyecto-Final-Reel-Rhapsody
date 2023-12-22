import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import Series from "../component/Series.jsx";
import SecondNavbar from "../component/SecondNavbar.jsx";
import imageCinema from "../../img/Vista home.png";

export const Home = () => {
	return (

		<>

			<div>
				<SecondNavbar />
				<div>
					<img className="presentation" src={imageCinema} />
				</div>
				<div className="container-title">
					<h2 className="title">MOVIES</h2>
					<div><Card /></div>
				</div>
				<div className="container-title">
					<h2 className=" title">SERIES</h2>
					<div><Series /></div>
				</div>
			</div>

			<div className="">
				<Link to="/payment" className="btn btn-warning" type="button">Donations</Link>
			</div>

		</>
	);
};
