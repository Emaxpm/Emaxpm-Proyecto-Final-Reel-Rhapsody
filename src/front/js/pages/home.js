import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import imageCinema from "../../img/Press.png";

export const Home = () => {
	return(
	<div>
		<div>
			<img className="presentation" src={imageCinema}/>
		</div>
		<div className="container-fluid bg-black">
			<div className="accordion">
				<div className="accordion-item bg-black">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
							MOVIES
						</button>
					</h2>
					<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body"><Card/></div>
					</div>
				</div>			
			</div>		
		</div>
		<div className="container-fluid bg-black">
			<div className="accordion">
				<div className="accordion-item bg-black">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
							SERIES
						</button>
					</h2>
					<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body"><Card/></div>
					</div>
				</div>			
			</div>		
		</div>
	</div>
	);
};
