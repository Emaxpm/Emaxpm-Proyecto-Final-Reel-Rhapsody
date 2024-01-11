import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/actors.css";


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

    const imagenError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D"
    }



    // const actorCards = store.actor.map((item) => (

    // <div key={item.id} className=" d-flex flex-wrap justify-content-center">

    //     <div className="card my-5 mx-5 col" style={{ minWidth: "25rem", maxWidth: "25rem" }}>
    //         <img src={'https://image.tmdb.org/t/p/w500' + item.profile_path} onError={imagenError} className="card-img-top" alt="..." />
    //         <div className="card-body">
    //             <h4 className="card-title">{item.name}</h4>
    //             <p className="card-text"> Popularity: {item.popularity}</p>
    //             <p className="card-text"> Vote Average: {item.vote_average}</p>
    //             <div className="buttons">
    //                 <Link to={`/VActor/${item.id}`}>
    //                     <button className="btn btn-outline-primary mt-3 button">
    //                         Learn more!
    //                     </button>
    //                 </Link>

    //             </div>
    //         </div>
    //     </div>
    // </div>


    // <div key={item.id} className="card mx-2 my-2">
    //     <img src={'https://image.tmdb.org/t/p/w500' + item.profile_path} className="pic" alt="..." />
    //     <div className="card-body">
    //         <h5 className="card-title">{item.name}</h5>
    //         <p className="card-text">vote: {item.popularity}</p>
    //         <div className="buttons">
    //             <Link to={`/VActor/${item.id}`} className="btn-details">
    //                 More!
    //             </Link>
    //         </div>
    //     </div>
    // </div>
    // ));

    return (


        <div>
            {store.currentUser && (
                <>
                    <h2 className="title">Actors</h2>

                    <nav aria-label="...">
                        <ul className="pagination d-flex justify-content-center mt-5">
                            <li className={`page-item ${min <= 1 ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={handlePreviousClick} tabIndex="-1" aria-disabled={min <= 1}>Previous</a>
                            </li>

                            {generateNumber().map((number, index) => (
                                <React.Fragment key={index}>{number}</React.Fragment>
                            ))}

                            <li className={`page-item ${max >= totalPagesActors ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={handleNextClick}>Next</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="d-flex flex-wrap justify-content-center">
                        {store.actor.map((item) => (
                            <div key={item.id} className="card my-5 mx-5 col" style={{ minWidth: "25rem", maxWidth: "25rem" }}>
                                <img src={'https://image.tmdb.org/t/p/w500' + item.profile_path} onError={imagenError} className="card-img-top actor-img" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text"> Popularity: {item.popularity}</p>
                                    <div className="buttons">
                                        <Link to={`/VActor/${item.id}`}>
                                            <button className="btn btn-outline-primary mt-3 button">
                                                Learn more!
                                            </button>
                                        </Link> 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>

    );
};

export default Actors
