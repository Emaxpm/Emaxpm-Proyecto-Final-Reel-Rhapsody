import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/Footer.js";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";


export const Home = () => {

	const { store, actions } = useContext(Context)
	const navigate = useNavigate()

	return (

		<>
			<Link to={"/movies"} style={{ textDecoration: 'none' }}>

				<h2 className="title-p mx-5 my-5">Movies</h2>

			</Link>

			<div className=" d-flex flex-row overflow-auto my-3 mx-5 random-card">

				{store.films.map((item) => (

					<div className="cards mx-5" key={item.id} >

						<div className="card mb-5" style={{ minWidth: "25rem" }}>
							<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title d-inline-block text-truncate" style={{ maxWidth: "370px" }}>{item.original_title}</h4>
								<p className="card-text"> Release Date: {item.release_date}</p>
								<p className="card-text"> Popularity: {item.popularity}</p>
								<p className="card-text"> Vote Average: {item.vote_average}</p>
							
							</div>

							<div className="buttons p-4 ">
								<Link to={`/single/${item.id}`}>
									<button className=" p-2 mb-auto info-buton">

										Learn more!

									</button>
								</Link>

								{store.currentUser &&

									<Link to={"/viewBigList"}>

										<button className="btn btn-outline-primary mt-3  info-buton" onClick={() => {
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



			<Link to={"/series"} style={{ textDecoration: 'none' }}>

				<h2 className="title-p mx-5 my-5">Series</h2>

			</Link>

			<div className=" d-flex flex-row overflow-auto my-3 mx-5 random-card">

				{store.series.map((item) => (

					<div className="cards mx-5" key={item.id}>

						<div className="card mb-5" style={{ minWidth: "25rem", }}>
							<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title d-inline-block text-truncate" style={{ maxWidth: "370px" }}>{item.original_name}</h4>
								<p className="card-text"> First Air Date: {item.first_air_date}</p>
								<p className="card-text"> Popularity: {item.popularity}</p>
								<p className="card-text"> Vote_average: {item.vote_average}</p>
							</div>

							<div className="buttons p-4 ">
								<Link to={`/viewSerie/${item.id}`}>

									<button className="info-buton p-2 mb-auto">
										Learn more!
									</button>

								</Link>

								{store.currentUser &&

									<Link to={"/viewBigList"}>

										<button className="btn btn-outline-primary mt-3 info-buton" onClick={() => {
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

			<Footer />

		</>
	);
};
