import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/card.css";

const Series = () => {
    const { store, actions } = useContext(Context);
    const totalPagesSeries = store.totalPagesSeries;
    const navigate = useNavigate()
    const [randomSerie, setRandomSerie] = useState(null);
    const selectRandomSerie = () => {
        const randomIndex = Math.floor(Math.random() * store.series.length);
        setRandomSerie(store.series[randomIndex]);
    };
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(5);

    const generateNumber = () => {
        const numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push(
                <li key={i} className="page-item">
                    <a className="page-link" href="#" onClick={() => actions.loadSomeSerie(i)}>
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
        if (max < totalPagesSeries || max < totalPagesSeries) {
            setMin(min + 5);
            setMax(max + 5);
        }
    }

    return (
        <>

            <h2 className=" title">SERIES</h2>

            {store.currentUser && (
                <div className="row d-flex flex-wrap justify-content-center mt-5">
                    <div className="container-title">
                        <button className="RandomButton" onClick={selectRandomSerie}>Random</button>
                    </div>
                </div>

            )}
            {randomSerie ? (

                <div className="random-card">

                    <div className="card my-5 mx-5 col" style={{ minWidth: "25rem", maxWidth: "25rem" }}>
                        <img src={'https://image.tmdb.org/t/p/w500' + randomSerie.backdrop_path} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">{randomSerie.original_name}</h4>
                            <p className="card-text"> Release Date: {randomSerie.first_air_date}</p>
                            <p className="card-text"> Popularity: {randomSerie.popularity}</p>
                            <p className="card-text"> Vote Average: {randomSerie.vote_average}</p>
                            <div className="buttons">
                                <Link to={"/viewBigList"}>
                                    <button className="btn btn-outline-primary mt-3 button">
                                        Learn more!
                                    </button>
                                </Link>

                                {store.currentUser && (
                                    <Link to={"/viewBigList"}>
                                        <button className="btn btn-outline-primary mt-3 button" onClick={() => {
                                            actions.addFavorite(randomSerie, "serie");
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

                    {/* Aquí se generan los elementos de lista para los números de página */}
                    {generateNumber()}

                    <li className={`page-item ${max >= (totalPagesSeries || totalPagesSeries) ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" onClick={handleNextClick}>Next</a>
                    </li>
                </ul>
            </nav>

            <div>

                <div className=" d-flex flex-wrap justify-content-center">
                    {store.series.map((item) => (
                        <div key={item.id} className="card my-5 mx-5 col" style={{ minWidth: "25rem", maxWidth: "25rem" }}>
                            <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.original_name}</h5>
                                <p className="card-text"> First Air Date: {item.first_air_date}</p>
                                <p className="card-text"> Popularity: {item.popularity}</p>
                                <p className="card-text"> Vote Average: {item.vote_average}</p>

                                <div className="buttons">

                                    <Link to={"/viewBigList"}>

                                        <button className="btn btn-outline-primary mt-3 button">
                                            Learn more!
                                        </button>

                                    </Link>

                                    {store.currentUser && (
                                        <Link to={"/viewBigList"}>

                                            <button className="btn btn-outline-primary mt-3 button" onClick={() => {
                                                actions.addFavorite(item, "serie")
                                                navigate("/viewBigList")

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
            </div>

            <Link to={"/"}>
                <button type="button" className="btn btn-primary">Back</button>
            </Link>
        </>
    );
};

export default Series;
