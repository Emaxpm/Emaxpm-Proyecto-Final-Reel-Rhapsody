import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
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
                        <p className="fs-4" style={{ width: "700px" }}>Biography: {store.OneActor.biography}</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p className="display-4">Birthday: {store.OneActor.birthday} </p>
                    <p className="display-4">Place of birth: {store.OneActor.place_of_birth} </p>
                </div>
            </div>
        </div>

    );
};

export default DetailActor