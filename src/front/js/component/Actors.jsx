import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/actors.css";

const Actors = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadSomeActors()
    }, [])
    console.log(store.actor)
    return (
        <div className="card-container">
            <div className="container text-center">
                <div className="row">
                    <div className="col-3">
                        {store.actor.slice(0, Math.ceil(store.actor.length / 3)).map((item) => (
                            <div key={item.id} className="card">
                                <img src={'https://image.tmdb.org/t/p/w500' + item.profile_path} className="pic" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">vote: {item.popularity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-3">
                        {store.actor.slice(Math.ceil(store.actor.length / 3), Math.ceil(store.actor.length * 2 / 3)).map((item) => (
                            <div key={item.id} className="card">
                                <img src={'https://image.tmdb.org/t/p/w500' + item.profile_path} className="pic" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">vote: {item.popularity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-3">
                        {store.actor.slice(Math.ceil(store.actor.length * 2 / 3)).map((item) => (
                            <div key={item.id} className="card">
                                <img src={'https://image.tmdb.org/t/p/w500' + item.profile_path} className="pic" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">vote: {item.popularity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actors