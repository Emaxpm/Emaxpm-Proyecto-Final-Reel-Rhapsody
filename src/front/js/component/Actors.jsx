import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/actors.css";
import SecondNavbar from "./Navbar.jsx";

const Actors = () => {
    const { store, actions } = useContext(Context)
    const totalPagesActors = store.totalPagesActors

    const [min, setMin] = useState(1);
    const [max, setMax] = useState(5);

    const generateNumber = () => {
        const numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push(
                <li key={i} className="page-item">
                    <button className="page-link" onClick={() => actions.loadSomeActors(i)}>
                        {i}
                    </button>
                </li>
            );
        }
        return numbers;
    };

    const handlePreviousClick = () => {
        if (min > 1) {
            const newMin = Math.max(min - 5, 1);
            setMin(newMin);
            setMax(newMin + 4);
        }
    };

    const handleNextClick = () => {
        if (max < totalPagesActors) {
            const newMax = Math.min(max + 5, totalPagesActors);
            setMax(newMax);
            setMin(newMax - 4);
        }
    };



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
            <div>
                {store.currentUser && (
                    <>
                        <h2 className="title">Actors</h2>

                        <nav aria-label="...">
                            <ul className="pagination d-flex justify-content-center mt-5">
                                {/* Resto de tu paginación */}
                            </ul>
                        </nav>

                        <div className="card-container">
                            <div className="container text-center">
                                <div className="grid-container">
                                    {actorCards}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>


    );
};

export default Actors
