import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

const Card = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadSomeFilm()
    }, [])
    console.log(store.films)
    return (

        <>
            {/* // <div className="card-container">
            //     {store.films.map((item => <div key={item.id} className="card">
            //         <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="pic" alt="..." />
            //         <div className="card-body">
            //             <h5 className="card-title">{item.original_title}</h5>
            //             <p className="card-text">Release Date: {item.release_date}</p>
            //             <p className="card-text">vote: {item.vote_average}</p>
            //         </div>
            //     </div>
            //     ))}
            // </div> */}

            <div className="d-flex flex-row overflow-auto my-5 mx-5">
                {store.films.map((item) => (
                    <div key={item.id} className="cards mx-5">
                        <div className="card mb-5" style={{ width: "20rem" }}>
                            <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.original_title}</h5>
                                <p className="card-text"> Release Date: {item.release_date}</p>
                                <p className="card-text"> vote: {item.vote_average}</p>

                                <div className="buttons">
                                    <Link to="/details" className="btn btn-outline-primary">
                                        More!
                                    </Link>
                                    <button className="btn btn-outline-primary mt-3">
                                        Reserved for popcorn
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
};

export default Card