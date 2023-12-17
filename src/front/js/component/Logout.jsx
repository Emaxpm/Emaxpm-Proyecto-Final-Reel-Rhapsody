import React, { useContext } from 'react';
import { Context } from '../store/appContext'; // Asegúrate de tener la importación correcta del contexto
import { useHistory } from 'react-router-dom'; // Importa useHistory para redireccionar

const Logout = () => {
    const { actions } = useContext(Context);
    const history = useHistory();

    const handleLogout = async () => {
        try {
            const success = await actions.logout();

            if (success) {
                history.push("/..");
            } else {
                console.error('Error during logout');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;