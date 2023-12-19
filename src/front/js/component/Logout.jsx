import React, { useContext } from 'react';
import { Context } from '../store/appContext'; // Asegúrate de tener la importación correcta del contexto
import { useNavigate, Link } from "react-router-dom";
import "../../styles/secondNavbar.css"

const Logout = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate()
   
    const handleLogout = async () => {
        try {
            const success = await actions.logout();

            if (success) {
                navigate("/");
            } else {
                console.error('Error during logout');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <button className="button" onClick={handleLogout}>Log Out</button>
    );
};

export default Logout;