import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
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
        };

        try {
            const res = await actions.addReview("movie", data);

            if (res === true) {
                setComment("");
                setRate("");
                setLoadReviews(!loadReviews);

                // Use SweetAlert for success message
                Swal.fire({
                    icon: "success",
                    title: "Review added successfully",
                    timer: 1500, // Timer in milliseconds (1.5 seconds)
                    showConfirmButton: false
                });
            } else {
                // Use SweetAlert for error message
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "An error occurred while adding the review."
                });
            }
        } catch (error) {
            console.error("Error adding review:", error);
        }
    };

    const handleDelete = async (reviewId) => {
        try {
            const res = await actions.deleteReview(reviewId);

            if (res === true) {
                setLoadReviews(!loadReviews);

                // Use SweetAlert for success message
                Swal.fire({
                    icon: "success",
                    title: "Review deleted successfully",
                    timer: 1500, // Timer in milliseconds (1.5 seconds)
                    showConfirmButton: false
                });
            } else {
                // Use SweetAlert for error message
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "An error occurred while deleting the review."
                });
            }
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    useEffect(() => {
        actions.loadOneMovie(params.id);
    }, []);

    useEffect(() => {
        const getData = async () => {
            setReviews(await actions.loadReviews("movie", params.id));
        };
        getData();
    }, [loadReviews]);

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
                                <h2>Genres:</h2>
                                <p>
                                    {store.film.genres && store.film.genres.map((genre, index) => (
                                        `${genre.name}${index < store.film.genres.length - 1 ? ', ' : ''}`
                                    ))}
                                </p>
                                <h2>You can see this movie at :</h2>

                                <p>Netflix, Disney+, HBO Max and Amazon Prime</p>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item over mb-3">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Overview :
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body text1">
                                <p className="">{store.film.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item over mb-3">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                Comments and rate:
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="movie-reviews">
                                {reviews && reviews.length > 0 && reviews.map((item) => {
                                    return (
                                        <div className="d-flex align-items-center row" key={item.id}>
                                            <div className="col-7">
                                                <p><strong>Comentario:</strong> {item.comment}</p>
                                            </div>
                                            <div className="col-2">
                                                <p><strong>Puntaje:</strong> {item.rate}</p>
                                            </div>
                                            <div className="col-2">
                                                <p><strong>Usuario:</strong> {item.user}</p>
                                            </div>
                                            <div className="col-1">
                                                {store.currentUser && item.user === store.currentUser.full_name &&
                                                    <button className="btn info-buton" type="button" onClick={() => handleDelete(item.id)}><i className="fa-solid fa-trash"></i></button>
                                                }
                                            </div>
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
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label Fo-rev">Comment</label>
                                    <textarea className="form-control" value={comment} id="exampleFormControlTextarea1" rows="3" onChange={(e) => setComment(e.target.value)}></textarea>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationDefault04" className="form-label Fo-rev">Rate</label>
                                    <select className="form-select" id="validationDefault04" value={rate} required onChange={(e) => setRate(e.target.value)}>
                                        <option selected disabled value="">Choose</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="but-coment">
                                    <button className="info-buton" type="button" onClick={() => handleSubmit()}>Save</button>
                                    <Link to="/" className="back-home">
                                        <button className="info-buton">Back home</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    }
                </div>
                <br />
            </div>
        </div >
    )
}

export default DetailMovie