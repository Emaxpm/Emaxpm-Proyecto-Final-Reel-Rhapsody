import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/card.css";

const Card = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    const [randomFilm, setRandomFilm] = useState(null);
    useEffect(() => {
        actions.loadSomeFilm()
    }, []);
    const selectRandomFilm = () => {
        const randomIndex = Math.floor(Math.random() * store.films.length);
        setRandomFilm(store.films[randomIndex]);
    };
    console.log(store.films)
    return (

        <>
            <div>
                <div className="row d-flex flex-wrap justify-content-center">
                    <div className="container-title">
                        <button onClick={selectRandomFilm}>Random</button>
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
                                            actions.addFavorite(randomFilm);
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
                                            actions.addFavorite(item)
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
        </>
    );
};

export default Card