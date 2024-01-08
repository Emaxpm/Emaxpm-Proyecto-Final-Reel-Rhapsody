import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import SecondNavbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.js";

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

						<div className="card mb-5" style={{ width: "25rem" }}>
							<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">{item.original_title}</h4>
								<p className="card-text"> Release Date: {item.release_date}</p>
								<p className="card-text"> Popularity: {item.popularity}</p>
								<p className="card-text"> Overview: {item.overview}</p>
							</div>

							<div className="buttons ">
								<Link to={"/movie/" + item.id}>
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

						<div className="card mb-5" style={{ width: "25rem" }}>
							<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">{item.original_name}</h4>
								<p className="card-text"> Release Date: {item.release_date}</p>
								<p className="card-text"> Popularity: {item.popularity}</p>
								<p className="card-text"> Overview: {item.overview}</p>
							</div>

							<div className="buttons ">
								<Link to={"/serie/" + item.id}>
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

			<footer class="footer">
					<div class= "footer-section">
						<article class="footer-section">

							<div class="Containers_views_numbers">
								<div class="number-container hide">
									<div class="Actualnumbers">
										<span class="number"><span>6535</span></span>
									</div>
									<span class="label">Watchers</span>
									</div>

								<div class="number-container hide">
									<div class="Actualnumbers">
										<span class="number"><span>1800</span></span>
										<span class="number">k+</span>
									</div>
									<span class="label">Shows watched</span>
									</div>

								<div class="number-container">
									<div class="actualnumbers">
										<span class="number"><span>97</span></span>
									</div>
									<span class="label">Countries</span>
								</div>

								<div class="number-container">
									<div class="Actualnumbers">
										<span class="number"><span>1.2</span></span>
										<span class="number">M+</span>
									</div>
									<span class="label">Page Views</span>
								</div>
							</div>	

							<div class="line"></div>
							
							<div class="lowerfooter">
								<div class="Informationaboutus">
									<div>
										<h2>Reel Rhapsody</h2>
									</div>
									<span class="brooklyn sm">Made with <i class="nes-icon is-small heart"></i> by RR's team.</span>
								</div>

								<div class="Links-footer">
									<a target="_blank" href="">BLOG</a>
									<a target="_blank" href="">COMMUNITY</a>
									<a target="_blank" href="/payment">DONATIONS</a>
									<a target="_blank" href="">HELP CENTER</a>
									<a target="_blank" href="">ABOUT</a>
								</div>
										
									<Link to="/payment" className="btn btn-warning" type="button">Donations</Link>
							</div>
						</article>
					</div>
			
			</footer>

			

		</>
	);
};
