import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/details.css"

const DetailMovie = () => {
    const [reviews, setReviews] = useState();
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState('');
    const [loadReviews, setLoadReviews] = useState(true);

    const { store, actions } = useContext(Context)
    const params = useParams()

    const handleSubmit = async () => {
        const data = {
            id: params.id,
            comment: comment,
            rate: rate
        }
        const res = await actions.addReview("movie", data)
        if (res == true) {
            setComment("")
            setRate("")
            setLoadReviews(!loadReviews)
            alert("Review added successfully")
        } else {
            alert("Error")
        }
    };

    const handleDelete = async (reviewId) => {
        const res = await actions.deleteReview(reviewId);
        if (res === true) {
            setLoadReviews(!loadReviews);
            alert("Review deleted successfully");
        } else {
            alert("Error actual");
        }
    };

    useEffect(() => {
        actions.loadOneMovie(params.id)
    }, [])
    console.log(store.film)

    useEffect(() => {
        
        const getData = async () => {
            setReviews(await actions.loadReviews("movie", params.id))
        }
        getData()
    }, [loadReviews])
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
                    </div>
                    <div className="accordion-item over">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                Comments and rate:
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="movie-reviews">
                                {reviews && reviews.length > 0 && reviews.map((item) => {
                                    return (
                                        <div className="d-flex align-items-start" key={item.id}>
                                            <p>Comentario: {item.comment} - Usuario: {item.user} - Puntaje: {item.rate}</p>
                                            {store.currentUser && item.user === store.currentUser.full_name &&
                                                <button className="btn btn-primary ms-auto" type="button" onClick={() => handleDelete(item.id)}><i className="fa-solid fa-trash"></i></button>
                                            }
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {store.currentUser &&
                        <div className="container">
                            <form className="row g-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                                    <textarea className="form-control" value={comment} id="exampleFormControlTextarea1" rows="3" onChange={(e) => setComment(e.target.value)}></textarea>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationDefault04" className="form-label">Rate</label>
                                    <select className="form-select" id="validationDefault04" value={rate} required onChange={(e) => setRate(e.target.value)}>
                                        <option selected disabled value="">Choose...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="button" onClick={() => handleSubmit()}>Save</button>
                                </div>                                
                            </form>
                        </div>
                    }
                </div>
                <br />
                <div><p></p></div>
            </div>
        </div >
    )
}

export default DetailMovie