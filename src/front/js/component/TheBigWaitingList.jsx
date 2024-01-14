import React, { useContext, useEffect, } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../styles/TheBigWaitingList.css"

const TheBigWaitingList = () => {


    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            await actions.getFavorite();
            //asociar el useEfecct a un actions nuevo que pida los items favoritos  completos  correspondiestes al usuario que este conectado 
        };

        fetchData();
    }, []);

    const goToDetails = async (item) => {
        try {
            await actions.saveItemMovie(item);

            // Verificar si es una película o serie y redirigir a la ruta correspondiente
            const route = item.movie_id ? `/single/${item.movie_id}` : `/viewSerie/${item.serie_id}`;
            navigate(route);
        } catch (error) {
            console.error(error);
        }
    };




    const removeFromFavorites = (itemToRemove) => {
        if (itemToRemove && itemToRemove.id !== undefined && itemToRemove.id !== null) {
            actions.updateFavorites(itemToRemove);
        } else {
            console.error("El objeto 'item' no tiene una propiedad 'id' válida.");
        }
    };
    console.log(store.favorites)
    return (


        <div>

            {store.currentUser && (

                <div>


                    <h2 className="title">Pending Popcorn</h2>
                    <div className=" d-flex flex-wrap justify-content-center">

                        {store.favorites && store.favorites.length > 0 ? store.favorites
                            .map((item, index) => {

                                return (
                                

                                    <div key={index} className="card card-fav my-4 mx-4 col random-card" style={{ minWidth: "30rem", maxWidth: "30rem" }}>
                                        <img src={'https://image.tmdb.org/t/p/w500' + item.url_img} className="w-100" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title d-inline-block text-truncate" style={{ maxWidth: "370px" }}>{item.title}</h4>
                                            {/* <p className="card-text">Release Date: {item.relese_data}</p>
                                            <p className="card-text">Popularity: {item.popularity}</p>
                                            <p className="card-text">Vote Average: {item.vote_average}</p> */}
                                            <div className="Favorites-butons">
                                                {/* <Link to={url}>
                                                <button className="btn btn-primary fav-button">
                                                    Learn more!
                                                </button>
                                            </Link> */}
                                                <button className="btn btn-outline-primary mt-3 info-buton" onClick={() => goToDetails(item)}>
                                                    Learn More!
                                                </button>
                                                <button className="btn btn-outline-primary mt-3 info-buton" onClick={() => removeFromFavorites(item)}>Watched</button>
                                            </div>
                                        </div>
                                    </div>

                                   

                                )

                            })
                            :

                            <p className="not-favorites"> You don't have any popcorn pending, do you want to add some? </p>
                        }
                        {/* {store.favorites && store.favorites.length > 0 ? store.favorites
                                .map((item, index) => {
                                    let idx = null
                                    if (item.movie_id) {
                                        idx = store.films.findIndex((elm) => elm.id === item.movie_id)
                                    } else {
                                        idx = store.series.findIndex((elm) => elm.id === item.serie_id)
                                    }
                                    

                                    return (
                                        <div key={index} className="card card-fav my-4 mx-4 col" style={{ minWidth: "30rem", maxWidth: "30rem" }}>
                                            <img src={'https://image.tmdb.org/t/p/w500' + (item.movie_id ? store.films[idx]?.backdrop_path : store.series[idx]?.backdrop_path)} className="w-100" alt="..." />
                                            <div className="card-body">
                                                <h4 className="card-title">{item.movie_id ? store.films[idx]?.original_title : store.series[idx]?.original_name}</h4>
                                                <p className="card-text">Release Date: {item.movie_id ? store.films[idx]?.release_date : store.series[idx]?.first_air_date}</p>
                                                <p className="card-text">Popularity: {item.movie_id ? store.films[idx]?.popularity : store.series[idx]?.popularity}</p>
                                                <p className="card-text">Vote Average: {item.movie_id ? store.films[idx]?.vote_average : store.series[idx]?.vote_average}</p>
                                                <div className="Favorites-butons">
                                                    <Link to={url}>
                                                        <button className="btn btn-primary fav-button">
                                                            Learn more!
                                                        </button>
                                                    </Link>
                                                    <button onClick={() => goToDetails(item)}>
                                                        Learn More!
                                                    </button>
                                                    <button className="btn btn-primary fav-button" onClick={() => removeFromFavorites(item)}>Watched</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <p className="not-favorites"> You don't have any popcorn pending, do you want to add some? </p>
                            } */}
                    </div>

                    <Link to={"/"}>

                        <button type="button" className="btn btn-primary fav-button">Back</button>

                    </Link>
                </div>

            )}
        </div>

    );
};

export default TheBigWaitingList;
