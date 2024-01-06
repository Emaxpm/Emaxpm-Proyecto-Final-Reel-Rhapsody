import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import SecondNavbar from "../component/Navbar.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)
	const navigate = useNavigate()

	return (

		<>
			<Link to={"/movies"}>

				<h2 className="title-p mx-5 my-5">Movies</h2>

			</Link>

			<div className=" d-flex flex-row overflow-auto my-3 mx-5">

				{store.films.map((item, index) => (

					<div className="card mb-5 mx-5" key={index} style={{ minWidth: "25rem" }}>
						<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
						<div className="card-body">
							<div className="body-content">
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

								<Link to={"/viewBigList"}>

									<button className="btn btn-outline-primary mt-3 button" onClick={() => {
										actions.addFavorite(item, "movie")
										navigate("/viewBigList")

									}}>
										Reserved for popcorn
									</button>

								</Link>

							</div>
						</div>
					</div>

				))}
			</div>

			<Link to={"/series"}>

				<h2 className="title-p mx-5 my-5">Series</h2>

			</Link>

			<div className=" d-flex flex-row overflow-auto my-3 mx-5">

				{store.series.map((item, index) => (

					<div className="card mb-5 mx-5" key={index} style={{ minWidth: "25rem" }}>
						<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
						<div className="card-body">
							<div className="body-content">
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

								<Link to={"/viewBigList"}>

									<button className="btn btn-outline-primary mt-3 button" onClick={() => {
										actions.addFavorite(item, "serie")
										navigate("/viewBigList")

									}}>
										Reserved for popcorn
									</button>

								</Link>

							</div>
						</div>
					</div>

				))}
			</div>

			<div>

				<Link to="/payment" className="btn btn-warning" type="button">Donations</Link>

			</div>

		</>
	);
};
