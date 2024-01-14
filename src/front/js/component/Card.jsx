import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/card.css";


const Card = () => {
    const { store, actions } = useContext(Context)
    const totalPagesMovies = store.totalPagesMovies;
    const navigate = useNavigate()
    const [randomFilm, setRandomFilm] = useState(null);
    const selectRandomFilm = () => {
        const randomIndex = Math.floor(Math.random() * store.idsMovies.length);
        const randomMovieId = store.idsMovies[randomIndex];

        actions.fetchMovieById(randomMovieId).then((randomMovie) => {
            setRandomFilm(randomMovie);
        });
    };
    const imagenError = (e) => {
        e.target.src = "https://picsum.photos/id/237/200/100"
    }

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
        if (max < totalPagesMovies || max < totalPagesMovies) {
            setMin(min + 5);
            setMax(max + 5);
        }
    }


    return (

        <>
            <h2 className="title">MOVIES</h2>

            {store.currentUser && (
                <div className="row d-flex flex-wrap justify-content-center mt-5">
                    <div className="container-title">
                        <button className=" button-r" onClick={selectRandomFilm}>Random</button>
                    </div>
                </div>
            )}

            {randomFilm ? (

                <div className="random-card mt-4">
                    <div className="card  my-5 mx-5 col" style={{ minWidth: "25rem", maxWidth: "25rem" }}>
                        <img src={'https://image.tmdb.org/t/p/w500' + randomFilm.backdrop_path} className="card-img-top" onError={imagenError} alt="..." />
                        <div className="card-body">
                            <h4 className="card-title d-inline-block text-truncate" style={{ maxWidth: "370px" }}>{randomFilm.original_title}</h4>
                            <p className="card-text"> Release Date: {randomFilm.release_date}</p>
                            <p className="card-text"> Popularity: {randomFilm.popularity}</p>
                            <p className="card-text"> Vote Average: {randomFilm.vote_average}</p>
                            <div className="buttons">
                                <Link to={`/single/${randomFilm.id}`}>
                                    <button className="info-buton p-2 mb-auto">
                                        Learn more!
                                    </button>
                                </Link>

                                {store.currentUser && (
                                    <Link to={"/viewBigList"}>
                                        <button className=" btn btn-outline-primary mt-3 info-buton" onClick={() => {
                                            actions.addFavorite(randomFilm, "movie");
                                            navigate("/viewBigList");
                                        }}>
                                            Reserved for popcorn
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            ) : null}

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

            <div className=" d-flex flex-wrap justify-content-center random-card">
                {store.films.map((item) => (
                    <div key={item.id} className="card my-5 mx-5 col" style={{ minWidth: "25rem", maxWidth: "25rem" }}>
                        <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} onError={imagenError} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title d-inline-block text-truncate" style={{ maxWidth: "370px" }}>{item.original_title}</h4>
                            <p className="card-text"> Release Date: {item.release_date}</p>
                            <p className="card-text"> Popularity: {item.popularity}</p>
                            <p className="card-text"> Vote Average: {item.vote_average}</p>
                            <div className="buttons">
                                <Link to={`/single/${item.id}`}>
                                    <button className="info-buton p-2 mb-auto">
                                        Learn more!
                                    </button>
                                </Link>

                                {store.currentUser && (
                                    <Link to={"/viewBigList"}>
                                        <button className="btn btn-outline-primary mt-3 info-buton" onClick={async () => {
                                            await actions.addFavorite(item, "movie");
                                            navigate("/viewBigList");
                                        }}>
                                            Reserved for popcorn
                                        </button>
                                    </Link>

                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link to={"/"}>
                <button type="button" className="btn btn-primary">Back</button>
            </Link>
        </>
    );
};

export default Card