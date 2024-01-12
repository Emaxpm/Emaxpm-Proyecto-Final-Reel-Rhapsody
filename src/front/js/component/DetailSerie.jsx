import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/details.css"

const DetailSerie = () => {
    const [reviews, setReviews] = useState();
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState('');
    const [loadReviews, setLoadReviews] = useState(true);

    const { store, actions } = useContext(Context)
    const params = useParams()

    const handleSubmit= async()=>{
        const data = {
            id: params.id,
            comment: comment,
            rate: rate
        }
        const res = await actions.addReview("serie", data)
        if (res == true){ 
            setLoadReviews(!loadReviews)
            alert("Review added successfully")
        }else{
            alert("Error")
        }
    }

    useEffect(() => {
        actions.loadOneSerie(params.id)
    }, [])
    console.log(store.serie)

    useEffect(() => {
        const getData = async () => {
            setReviews(await actions.loadReviews("serie", params.id))
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
                            <img src={'https://image.tmdb.org/t/p/w500' + store.serie.backdrop_path} className="div-pic" alt="..."></img>
                        </div>
                        <div className="div-cont">
                            <h2 className="">{store.serie.name}</h2>
                            <div className="">
                                <p className="display-4">First Air Date: {store.serie.first_air_date} </p>
                                <p className="display-4">Number Of Episodes: {store.serie.number_of_episodes} </p>
                                <p className="display-4">Number Of Seasons: {store.serie.number_of_seasons} </p>
                                <p className="display-4">Popularity: {store.serie.popularity} </p>
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
                                <p className="text-dark">{store.serie.overview}</p>
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
                            <div className="serie-reviews">
                                {reviews && reviews.length > 0 && reviews.map((item) => {
                                    return (
                                        <p>Comentario: {item.comment} - Usuario: {item.user} - Puntaje: {item.rate}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {store.currentUser &&
                    <div className="container">
                        <form className="row g-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> setComment(e.target.value)}></textarea>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationDefault04" className="form-label">Rate</label>
                                <select className="form-select" id="validationDefault04" required onChange={(e)=> setRate(e.target.value)}>
                                    <option selected disabled value="">Choose...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="button" onClick={()=>handleSubmit()}>Submit form</button>
                            </div>
                        </form>
                    </div>
                    }
                </div>
                <br />
                <div><p></p>
                </div>
            </div>
        </div>


    )
}

export default DetailSerie