import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from "../../img/Logo.png"
import Logout from './Logout.jsx';
import "../../styles/secondNavbar.css"

const SecondNavbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        console.log("funciona el boton")
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <>

            <nav className="main-nav">

                <div className="nav-container">

                    <Link to={"/home"}>

                        <img src={Logo} className="logo" />

                    </Link>

                    <h2>Reel Rhapsody</h2>

                </div>
                <div className="dropdown">
                    <button className="dropdown-btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        MENU&nbsp;
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Categories</a></li>
                        <li><Link to="/demo">Actors</Link></li>
                        <li><a href="#">Favorites</a></li>
                        <hr/>
                        <li>
                        <Logout/>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}


export default SecondNavbar