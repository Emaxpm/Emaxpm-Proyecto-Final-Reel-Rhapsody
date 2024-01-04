import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

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
        <div>
            <h1>Editar Perfil</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Avatar:</label>
                    <input
                        type="text"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                    />
                </div>                
                <button onClick={handleSubmit} type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default CustomizeUser;

