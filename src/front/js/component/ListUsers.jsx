import React, { useContext, useState, useEffect } from "react";
import { Context, } from "../store/appContext.js";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/card.css";

const ListUsers = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.loadAllUsers();
    }, [])
    console.log(store.users)


    return (

        <>
            <h2 className="title">User List</h2>
            <div className='container mb-5'>
                <ul class="list-group d-flex">
                    {store.users.map((user, index) => (
                        <li key={index} className="list-group-item">
                            {user.full_name} - {user.email}
                        </li>
                    ))}
                </ul>
            </div>
            <Link to={"/"} className="back-home">
                <button type="button" className="btn btn-primary info-buton">Back Home</button>
            </Link>
        </>
    );
};

export default ListUsers