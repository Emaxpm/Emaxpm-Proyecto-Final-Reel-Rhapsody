import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/details.css"

const DetailMovie = () => {
    const [reviews, setReviews] = useState()
    const { store, actions } = useContext(Context)
    const params = useParams()
    useEffect(() => {
        actions.loadOneMovie(params.id)
    }, [])
    console.log(store.film)
    
    useEffect(() => {
        const getData = async () => {
            setReviews(await actions.loadReviews("movie", params.id))
        }
        getData()
    }, [])
    console.log(reviews)
    return (

        <div className="">
            <div className="">
                <div className="">
                    <div className="contain-detail">
                        <div className="div-img">
                            <img src={'https://image.tmdb.org/t/p/w500' + store.film.backdrop_path} className="div-pic" alt="..."></img>
                        </div>
                        <div className="div-cont">
                            <h2 className="">{store.film.original_title}</h2>
                            <div className="">
                                <p className="">Release Date: {store.film.release_date} </p>
                                <p className="">Popularity: {store.film.popularity} </p>
                                <p className="">Vote Average: {store.film.vote_average} </p>
                                <p className="">Original Language: {store.film.original_language} </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item over">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Overview :
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <p className="text-dark">{store.film.overview}</p>
                            </div>
                        </div>
                        <div className="movie-reviews">
                            {reviews && reviews.length > 0 && reviews.map((item)=>{
                                return(
                                    <p>Comentario: {item.comment} - Usuario: {item.user} - Puntaje: {item.rate}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMovie