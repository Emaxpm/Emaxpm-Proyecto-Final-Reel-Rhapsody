import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/actors.css";
import SecondNavbar from "./SecondNavbar.jsx";

const Actors = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadSomeActors()
    }, [])
    console.log(store.actor)

    const actorCards = store.actor.map((item) => (
        <div key={item.id} className="card mx-2 my-2">
            <img src={'https://image.tmdb.org/t/p/w500' + item.profile_path} className="pic" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">vote: {item.popularity}</p>
                <div className="buttons">
                    <Link to={`/VActor/${item.id}`} className="btn-details">
                        More!
                    </Link>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <SecondNavbar />
            <h2 className="title">Actors</h2>
            <div className="card-container">
                <div className="container text-center">
                    <div className="grid-container">
                        {actorCards}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Actors
