import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";


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

									<button className="btn btn-outline-primary mt-3 button">
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

			{/* <footer className="footer">
					<div className= "footer-section">
						<article className="footer-section">

							<div className="Containers_views_numbers">
								<div className="number-container hide">
									<div className="actualnumbers">
										<span className="number"><span>6535</span></span>
									</div>
									<span className="label">Watchers</span>
									</div>

								<div className="number-container hide">
									<div className="actualnumbers">
										<span className="number"><span>1800</span></span>
										<span className="number">k+</span>
									</div>
									<span className="label">Shows watched</span>
									</div>

								<div className="number-container">
									<div className="actualnumbers">
										<span className="number"><span>97</span></span>
									</div>
									<span className="label">Countries</span>
								</div>

								<div className="number-container">
									<div className="actualnumbers">
										<span className="number"><span>1.2</span></span>
										<span className="number">M+</span>
									</div>
									<span className="label">Page Views</span>
								</div>
							</div>	

							<div className="line"></div>
							
							<div className="lowerfooter">
								<div className="Informationaboutus">
									<div>
										<h2>Reel Rhapsody</h2>
									</div>
									<span className="brooklyn sm">Made with <i className="nes-icon is-small heart"></i> by RR's team.</span>
								</div>

								<div className="Linksfooter">
										<button target="_blank" href="">BLOG</button>
										<button target="_blank" href="">COMMUNITY</button>
									<Link to="/payment">
										<button target="_blank" href="/payment">DONATIONS</button>
									</Link>
		
									<button target="_blank" href="">HELP CENTER</button>

										<button target="_blank" href="">ABOUT</button>
								</div>
										
									<Link to="/payment" className="btn btn-warning" type="button">Donations</Link>
							</div>
						</article>
					</div>
			
			</footer> */}

			<Link to="/payment" className="btn btn-warning" type="button">Donations</Link>

		</>
	);
};
