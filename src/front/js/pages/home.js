import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Series } from "../component/series";
import imageCinema from "../../img/presentation.png";

export const Home = () => {
	return(
	<div>
		<div>
			<img className="presentation" src={imageCinema}/>
		</div>
		<div className="container-fluid row">
			<h2 className="col-12 title">MOVIES</h2>
			<div><Card/></div>			
		</div>
		<div className="container-fluid row">
			<h2 className="col-12 title">SERIES</h2>
			<div><Series/></div>
		</div>
	</div>
	);
};
