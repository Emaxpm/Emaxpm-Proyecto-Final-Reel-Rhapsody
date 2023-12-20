import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const TheBigWaitingList = () => {

    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadUserFavorites()
    }, [])

    return (

        <>
            <div className="card-list" style={{width: "18rem"}}>

                {store.userFavorites.map((item => <div key={item.id} className="card-favorites">

                <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className="" alt="..." />

                        <div className="card-body">

                            <h5 className="card-title">{item.original_title}</h5>

                            <p className="card-text">Release Date: {item.release_date}</p>

                            <p className="card-text">vote: {item.vote_average}</p> 

                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            
                        </div>
                </div>

                ))}  

            </div>



        </>
    )
}

export default TheBigWaitingList