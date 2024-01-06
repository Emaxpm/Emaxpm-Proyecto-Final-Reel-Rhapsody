import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext.js';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../img/Logo.png";
import Logout from './Logout.jsx';
import "../../styles/secondNavbar.css";
import defaultAvatar from "../../img/defaultAvatar.png";

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handlerEdit = async (currentUser) => {
        navigate("/CustUser", { state: { currentUser: currentUser } });
    }

    return (
        <>
            <nav className="main-nav">
                <div className="nav-container">
                    <Link to={"/"}>
                        <img src={Logo} className="logo" />
                    </Link>
                    <h2>Reel Rhapsody</h2>
                </div>
                {store.currentUser &&
                    <div className='cont-btns'>
                        <div className="dropdown">
                            <button
                                className={`dropdown-btn dropdown-toggle ${isDropdownOpen ? 'active' : ''}`}
                                type="button"
                                onClick={toggleDropdown}
                            >
                                MENU&nbsp;
                            </button>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} onBlur={closeDropdown}>
                                <li><Link to={"/viewBigList"}>Pending Popcorn</Link></li>
                                <li><Link to="/demo">Actors</Link></li>
                                <li></li>
                                <hr />
                                <li>
                                    <Logout />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className='user-btn' onClick={() => handlerEdit(store.currentUser)}>
                                <img className="w-100 h-100 rounded-circle" src={store.currentUser?.avatar ? store.currentUser.avatar : defaultAvatar} alt="" />
                            </button>
                        </div>
                    </div>
                }
            </nav>
        </>
    );
};

export default Navbar;