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
			<SecondNavbar />

			<div className="d-flex mt-3 px-3">
				<p className="Parrafo-home">
					"Embark on an enchanting journey through cinematic wonders with Reel Rhapsody. Our curated selection awaits your discovery, offering the best random choices in movies and series. Let serendipity guide your entertainment experience as you explore the realms of storytelling magic."
				</p>

				<img className="presentation px-3" src={imageCinema} />

			</div>

			<div className="linsk-ms mt-3">

				<h2>Que te gustaria ver?</h2>

				<div className="butons-ms px-5 py-5">

					<Link to={"/movies"}>
						<button type="button" className="btn btn-primary px-3 py-3 mx-2">Movies</button>
					</Link>

					<Link to={"/series"}>
						<button type="button" className="btn btn-primary px-3 py-3">Series</button>
					</Link>

				</div>

			</div>

			<div className="paypal mt-5">

				<h2>Te gusta nuestra aplicacion? nos ayudarias con una donacion para seguir mejorando la aplicacion y que llegue a mas personas</h2>

				<div>

					<Link to="/payment" className="btn btn-warning" type="button">Donations</Link>

				</div>

			</div>
		</>
	);
};
