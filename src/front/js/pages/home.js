import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => (
	<div className="container-fluid bg-black">
		<div className="accordion">
			<div className="accordion-item bg-black">
				<h1 className="accordion-header">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" id="title">
						Characters
					</button>
				</h1>
				<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
					<div className="accordion-body"><Card/></div>
				</div>
			</div>			
		</div>
		
	</div>
);
