import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/dActor.css"

const DetailActor = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()
    useEffect(() => {
        actions.loadOneActor(params.id)
    }, [])
    console.log(store.OneActor)

    return (

        <div className="primero">
            <div className="text-white">
                <div className="top d-flex align-items-center my-4">
                    <div className="left">
                        <img src={'https://image.tmdb.org/t/p/w500' + store.OneActor.profile_path} className="pic" alt="..." style={{ width: "300px", height: "300px" }}></img>
                    </div>
                    <div className="right">
                        <h2 className="display-4">{store.OneActor.name}</h2>
                        {/* <p className="fs-4" style={{ width: "700px" }}>Biography: {store.OneActor.biography}</p> */}
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Biography:
                                    </button>
                                </h2>

                                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ">
                                        <p className="text-dark">{store.OneActor.biography}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="text-center">
                            <p className="display-4">Birthday: {store.OneActor.birthday} </p>
                            <p className="display-4">Place of birth: {store.OneActor.place_of_birth} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailActor