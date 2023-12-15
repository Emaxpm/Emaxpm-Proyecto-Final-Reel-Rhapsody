import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Series = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadSomeSerie()
    }, [])
    console.log(store.series)
    return (
        <div className="card-container">
            {store.series.map((item => <div key={item.id} className="card">
                    <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="pic" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.original_name}</h5>
                        <p className="card-text">Release Date: {item.first_air_date}</p>
                        <p className="card-text">vote: {item.vote_average}</p>                       
                    </div>
                </div>
            ))}           
        </div>
    );
};