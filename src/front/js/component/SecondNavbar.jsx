import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../img/Logo.png"
import "../../styles/secondNavbar.css"

const SecondNavbar = () => {
    return (
        <>

            <nav className="main-nav">

                <div className="nav-container">

                    <Link to={"/home"}>

                        <img src={Logo} className="logo" />

                    </Link>

                    <h2>Reel Rhapsody</h2>

                </div>

                <div>

                    <Link to={"/demo"}>

                        <button type="button" className="btn btn-light">Demo</button>

                    </Link>

                    <Link to={"/single"}>

                        <button type="button" className="btn btn-light second-button">Single</button>

                    </Link>

                </div>

            </nav>

        </>
    )
}

export default SecondNavbar