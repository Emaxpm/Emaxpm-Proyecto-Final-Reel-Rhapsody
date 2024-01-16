import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "../../styles/secondNavbar.css";

const Logout = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const success = await actions.logout();

            if (success) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged out successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => navigate("/login"));
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