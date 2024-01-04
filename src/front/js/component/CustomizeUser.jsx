import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';

const CustomizeUser = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        fullName: '',
        // avatar: '' 
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

 
    const handleSubmit = e => {
        e.preventDefault();
        actions.editUser(store.currentEdit.id, formData);
    };

    return (
        <div>
            <h1>Editar Perfil</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    {}
                </div>
                <button onClick={handleSubmit} type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default CustomizeUser;
