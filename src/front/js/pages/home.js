import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import SecondNavbar from "../component/SecondNavbar.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)
	const navigate = useNavigate()

	return (
		<>
			<SecondNavbar />

			<Link to={"/movies"}>

				<h2 className="title-p mx-5 my-5">Movies</h2>

			</Link>

			<div className=" d-flex flex-row overflow-auto my-3 mx-5 movies-con">

				{store.films.map((item) => (

					<div className="cards mx-5">

						<div className="card mb-5" key={item.id} style={{ width: "25rem" }}>
							<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">{item.original_title}</h4>
								<p className="card-text"> Release Date: {item.release_date}</p>
								<p className="card-text"> Popularity: {item.popularity}</p>
								<p className="card-text"> Overview: {item.overview}</p>

								<div className="buttons">
									<Link to={"/singleCharacter/"}>
										<button className="button p-2">

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

					</div>

				))}
			</div>

			<Link to={"/series"}>

				<h2 className="title-p mx-5 my-5">Series</h2>

			</Link>

			<div className=" d-flex flex-row overflow-auto my-3 mx-5">

				{store.series.map((item) => (

					<div className="cards mx-5">

						<div className="card mb-5" key={item.id} style={{ width: "25rem" }}>
							<img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">{item.original_name}</h4>
								<p className="card-text"> Release Date: {item.release_date}</p>
								<p className="card-text"> Popularity: {item.popularity}</p>
								<p className="card-text"> Overview: {item.overview}</p>

								<div className="buttons">
									<Link to={"/singleCharacter/"}>
										<button className="button p-2">

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

					</div>

				))}
			</div>




			<div>

				<Link to="/payment" className="btn btn-warning" type="button">Donations</Link>

			</div>

		</>
	);
};
