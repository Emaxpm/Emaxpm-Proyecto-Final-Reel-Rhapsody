import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetailSerie = () => {

    const { store, actions } = useContext(Context)
    const params = useParams()
    useEffect(() => {
        actions.loadOneSerie(params.id)
    }, [])
    console.log(store.serie)

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
                </div>
            </div>
        </div>



        // <div className="primero">
        //     <div className="text-white">
        //         <div className="top d-flex align-items-center my-4">
        //             <div className="left">
        //                 <img src={'https://image.tmdb.org/t/p/w500' + store.serie.backdrop_path} className="pic" alt="..." style={{ width: "300px", height: "300px" }}></img>
        //             </div>
        //             <div className="right">
        //                 <h2 className="display-4">{store.serie.name}</h2>
        //                 <div className="accordion" id="accordionExample">
        //                     <div className="accordion-item">
        //                         <h2 className="accordion-header" id="headingOne">
        //                             <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //                                 Overview:
        //                             </button>
        //                         </h2>

        //                         <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        //                             <div className="accordion-body ">
        //                                 <p className="text-dark">{store.serie.overview}</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <hr className="my-4" />
        //                 <div className="text-center">
        //                     <p className="display-4">First Air Date: {store.serie.first_air_date} </p>
        //                     <p className="display-4">Number Of Episodes: {store.serie.number_of_episodes} </p>
        //                     <p className="display-4">Number Of Seasons: {store.serie.number_of_seasons} </p>
        //                     <p className="display-4">Popularity: {store.serie.popularity} </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default DetailSerie