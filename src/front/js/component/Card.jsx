import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/card.css";
import SecondNavbar from "./SecondNavbar.jsx";

const Card = () => {
    const { store, actions } = useContext(Context)
    const totalPagesMovies = store.totalPagesMovies;
    const navigate = useNavigate()
    const [randomFilm, setRandomFilm] = useState(null);
    const selectRandomFilm = () => {
        const randomIndex = Math.floor(Math.random() * store.films.length);
        setRandomFilm(store.films[randomIndex]);
    };
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(5);

    const generateNumber = () => {
        const numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push(
                <li key={i} className="page-item">
                    <a className="page-link" href="#" onClick={() => actions.loadSomeFilm(i)}>
                        {i}
                    </a>
                </li>
            );
        }
        return numbers;
    };

    const handlePreviousClick = () => {
        if (min > 1) {
            setMin(min - 5);
            setMax(max - 5)
        }
    };

    const handleNextClick = () => {
        if (max < totalPagesMovies || max < totalPagesSeries) {
            setMin(min + 5);
            setMax(max + 5);
        }
    }


    return (

        <>
            <SecondNavbar />

            <h2 className="title">MOVIES</h2>

            <div className="row d-flex flex-wrap justify-content-center mt-5">
                <div className="container-title">
                    <button className="RandomButton" onClick={selectRandomFilm}>Random</button>
                </div>
                {randomFilm ? (
                    <div className="card my-5 mx-5 col" style={{ minWidth: "30rem", maxWidth: "30rem" }}>
                        <img src={'https://image.tmdb.org/t/p/w500' + randomFilm.backdrop_path} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{randomFilm.original_title}</h5>
                            <p className="card-text"> Release Date: {randomFilm.release_date}</p>
                            <p className="card-text"> vote: {randomFilm.vote_average}</p>
                            <div className="buttons">
                                <Link to={"/viewBigList"}>
                                    <button className="btn btn-outline-primary mt-3 button">
                                        More!
                                    </button>
                                </Link>
                                <Link to={"/viewBigList"}>
                                    <button className="btn btn-outline-primary mt-3 button" onClick={() => {
                                        actions.addFavorite(randomFilm, "movie");
                                        navigate("/viewBigList");
                                    }}>
                                        Reserved for popcorn
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>

            <nav aria-label="...">
                <ul className="pagination d-flex justify-content-center mt-5">
                    <li className={`page-item ${min <= 1 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" onClick={handlePreviousClick} tabIndex="-1" aria-disabled={min <= 1}>Previous</a>
                    </li>

                    {generateNumber().map((number, index) => (
                        <React.Fragment key={index}>{number}</React.Fragment>
                    ))}

                    <li className={`page-item ${max >= (totalPagesMovies || totalPagesMovies) ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" onClick={handleNextClick}>Next</a>
                    </li>
                </ul>
            </nav>


            <div>

                <div className="row d-flex flex-wrap justify-content-center">
                    {store.films.map((item) => (
                        <div key={item.id} className="card my-5 mx-5 col" style={{ minWidth: "30rem", maxWidth: "30rem" }}>
                            <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.original_title}</h5>
                                <p className="card-text"> Release Date: {item.release_date}</p>
                                <p className="card-text"> vote: {item.vote_average}</p>

                                <div className="buttons">

                                    <Link to={"/viewBigList"}>

                                        <button className="btn btn-outline-primary mt-3 button">
                                            More!
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
            </div>

            <Link to={"/home"}>
                <button type="button" class="btn btn-primary">Back</button>
            </Link>
        </>
    );
};

export default Card