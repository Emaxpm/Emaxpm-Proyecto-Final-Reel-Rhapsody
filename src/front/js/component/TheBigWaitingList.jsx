import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import SecondNavbar from "../component/SecondNavbar.jsx";

const TheBigWaitingList = () => {

    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.addFavorite()
    }, [])

    return (

        <>
            <SecondNavbar />

            <h2 className="title">Pending Popcorn</h2>
            <div className="row d-flex flex-wrap justify-content-center">
                {store.favorites
                    .filter(item => item && item.id !== undefined && item.id !== null)
                    .map(item => (
                        <div key={item.id} className="card my-4 mx-4 col" style={{ minWidth: "30rem", maxWidth: "30rem" }}>
                            <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="w-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.original_title}</h5>
                                <p className="card-text">Release Date: {item.release_date}</p>
                                <p className="card-text">vote: {item.vote_average}</p>
                                <button className="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default TheBigWaitingList