import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from "../../img/Logo.png"
import "../../styles/secondNavbar.css"

const SecondNavbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
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
                    <button className="dropdown-btn" onClick={toggleDropdown}>
                        MENU&nbsp;
                        <i className={`fas fa-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
                    </button>

                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#">Categories</a>
                            </li>
                            <li>
                                <a href="#">Actors</a>
                            </li>
                            <li>
                                <a href="#">Favorites</a>
                            </li>
                            <hr/>
                            <li>
                                <a href="#">Log Out</a>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </>
    )
}


export default SecondNavbar