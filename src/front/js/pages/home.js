import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import Preguntas from "./preguntas.js";




export const Home = () => {

	const { store, actions } = useContext(Context)
	const navigate = useNavigate()

	return (

		<>
			<Link to={"/movies"}>

				<h2 className="title-p mx-5 my-5">Movies</h2>

			</Link>

			<div className=" d-flex flex-row overflow-auto my-3 mx-5">

				{store.films.map((item) => (

					<div className="cards mx-5" key={item.id} >

						<div className="card mb-5" style={{ minWidth: "25rem" }}>
							<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">{item.original_title}</h4>
								<p className="card-text"> Release Date: {item.release_date}</p>
								<p className="card-text"> Popularity: {item.popularity}</p>
								<p className="card-text"> Vote Average: {item.vote_average}</p>
								{/* <p className="card-text"> Overview: {item.overview}</p> */}
							</div>

							<div className="buttons p-4 ">
								<Link to={`/single/${item.id}`}>
									<button className="button p-2 mb-auto">

										Learn more!

									</button>
								</Link>

								{store.currentUser &&

									<Link to={"/viewBigList"}>

										<button className="btn btn-outline-primary mt-3 button" onClick={() => {
											actions.addFavorite(item, "movie")
											navigate("/viewBigList")

										}}>
											Reserved for popcorn
										</button>

									</Link>
								}

							</div>
						</div>
					</div>

				))}
			</div>

			<Link to={"/series"}>

				<h2 className="title-p mx-5 my-5">Series</h2>

			</Link>

			<div className=" d-flex flex-row overflow-auto my-3 mx-5">

				{store.series.map((item) => (

					<div className="cards mx-5" key={item.id}>

						<div className="card mb-5" style={{ minWidth: "25rem", }}>
							<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">{item.original_name}</h4>
								<p className="card-text"> First Air Date: {item.first_air_date}</p>
								<p className="card-text"> Popularity: {item.popularity}</p>
								<p className="card-text"> Vote_average: {item.vote_average}</p>
								{/* <p className="card-text"> Overview: {item.overview}</p> */}
							</div>

							<div className="buttons p-4 ">
								<Link to={`/viewSerie/${item.id}`}>

									<button className="button p-2 mb-auto">
										Learn more!
									</button>

								</Link>

								{store.currentUser &&

									<Link to={"/viewBigList"}>

										<button className="btn btn-outline-primary mt-3 button" onClick={() => {
											actions.addFavorite(item, "serie")
											navigate("/viewBigList")

										}}>
											Reserved for popcorn
										</button>

									</Link>
								}

							</div>
						</div>
					</div>

				))}
			</div>

			<footer className="footer">
				<div className="footer-section">
					<article className="footer-section">


						<div className="row lowerfooter">
							<div className="Informationaboutus col">
								<div>
									<h2>Reel Rhapsody</h2>
								</div>
								<span className="brooklyn sm">Made with <i className="nes-icon is-small heart"></i> by RR's team.</span>
							</div>

							<div className="Linksfooter col d-flex justify-content-end align-items-center me-2">


								<span className="mx-1" role="button" onClick={() => navigate("/payment")}>DONATIONS</span>



								<span className="mx-1" role="button" onClick={() => navigate("/technicalsupport")}>Technical Support</span>


								<span className="mx-1" role="button" onClick={() => navigate("/aboutus")}>About Us</span>


								<span className="mx-1" role="button" onClick={() => navigate("/preguntas")}>Frequent Questions</span>


							</div>
						</div>
					</article>
				</div>

			</footer >



		</>
	);
};
