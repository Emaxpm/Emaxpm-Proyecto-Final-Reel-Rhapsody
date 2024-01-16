import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/cust.css";
import avatars from "../../img/json/avatars.json";

const CustomizeUser = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        full_name: "",
        avatar: "",
    });

    useEffect(() => {
        // Populate the form data with the current user information
        setFormData({
            full_name: store.currentUser.full_name || "",
            avatar: store.currentUser.avatar || "",
        });
    }, [store.currentUser]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.editUser(formData);
        showSuccessAlert();
    };

    const renderAvatarOptions = () => {
        return avatars.map((avatar, index) => (
            <div className="form-check form-check-inline" key={index}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="avatar"
                    id={`inlineRadio${index}`}
                    value={avatar.url}
                    checked={formData.avatar === avatar.url}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={`inlineRadio${index}`}>
                    <img src={avatar.url} alt={`Avatar ${avatar.name}`} />
                </label>
            </div>
        ));
    };

    const showSuccessAlert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Profile updated successfully!",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <>
            <div>
                {store.currentUser && (
                    <>
                        <div className="texto">
                            <form onSubmit={handleSubmit}>
                                <h1>Edit Profile</h1>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control inputstyle"
                                        id="formGroupExampleInput"
                                        placeholder="Name"
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput2" className="form-label">
                                        Choose your Avatar:
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="form-control mb-5"
                                        id="formGroupExampleInput2"
                                        placeholder="Avatar URL"
                                        name="avatar"
                                        value={formData.avatar}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">{renderAvatarOptions()}</div>
                                <div className="but-coment">
                                    <button className="info-buton" type="submit">
                                        Save
                                    </button>
                                    <Link to={"/"} className="back-home">
                                        <button type="button" className="btn btn-primary info-buton">
                                            Back Home
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CustomizeUser;


