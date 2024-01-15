import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single.js";
import Footer from "./component/Footer.js";
import ViewSerie from "./pages/viewSerie.js";
import { VActor } from "./pages/VActor.js";
import Preguntas from "./pages/preguntas.js";
import Aboutus from "./pages/aboutus.js";
import { CustUser } from "./pages/CustUser.js";
import Payment from "./pages/payment.js";
import Morehelps from "./pages/morehelps.js";
import Signup from "./component/SignUp.jsx";
import LogIn from "./component/LogIn.jsx";
import ViewBigList from "./pages/viewBigList.js";
import TechnicalSupport from "./pages/TechnicalSupport.js"
import ListUsers from "./component/ListUsers.jsx";

import injectContext from "./store/appContext";
import Navbar from "./component/Navbar.jsx";
import Card from "./component/Card.jsx";
import Series from "./component/Series.jsx";
import DetailMovie from "./component/DetailMovie.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<LogIn />} path="/login" />
                        <Route element={<Home />} path="/" />
                        <Route element={<Card />} path="/movies" />
                        <Route element={<Series />} path="/series" />
                        <Route element={<Payment />} path="/payment" />
                        <Route element={<Preguntas />} path="/preguntas" />
                        <Route element={<Aboutus />} path="/aboutus" />
                        <Route element={<TechnicalSupport />} path="/TechnicalSupport" />
                        <Route element={<Signup />} path="signup" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<VActor />} path="/VActor/:id" />
                        <Route element={<CustUser />} path="/CustUser" />
                        <Route element={<ListUsers />} path="ListUsers"/>
                        <Route element={<ViewBigList />} path="/viewBigList" />
                        <Route element={<Single />} path="/single/:id" />
                        <Route element={<DetailMovie />} path="/movie/:id" />
                        <Route element={<ViewSerie />} path="/viewSerie/:id" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
