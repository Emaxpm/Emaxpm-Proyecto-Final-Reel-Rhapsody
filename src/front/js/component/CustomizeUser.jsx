import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cust.css"

const CustomizeUser = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        full_name: '',
        avatar: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = e => {
        e.preventDefault();
        actions.editUser(formData);

    };
    return (
        <div className="texto">
            <form onSubmit={handleSubmit}>
                <h1>Edit Profile</h1>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Name:</label>
                    <input type="text" className="form-control inputstyle" id="formGroupExampleInput" placeholder="Name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange} />

                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Avatar:</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Avatar"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange} />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label className="form-check-label" for="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label className="form-check-label" for="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                            <label className="form-check-label" for="inlineRadio3">3 </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
                            <label className="form-check-label" for="inlineRadio4">4</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
                            <label className="form-check-label" for="inlineRadio5">5</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6"/>
                            <label className="form-check-label" for="inlineRadio6">6</label>
                    </div>
                </div>
                <button className="botcust" onClick={handleSubmit} type="submit">Save</button>
            </form>
        </div>
    );
};

export default CustomizeUser;

