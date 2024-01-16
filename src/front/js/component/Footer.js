import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {

    const navigate = useNavigate()

    return (

        <div>

            <div className="foot">

                <div className="foot-info">

                    <p className="mx-1 p-f button-r" role="button" onClick={() => navigate("/technicalsupport")}>Technical Support</p>

                    <p className="mx-1 p-f button-r" role="button" onClick={() => navigate("/payment")}>Donatios</p>

                    <p className="mx-1 p-f button-r" role="button" onClick={() => navigate("/preguntas")}>Frequent Questions</p>

                    <p className="mx-1 p-f button-r" role="button" onClick={() => navigate("/aboutus")}>About Us</p>

                </div>

            </div>
        </div>

    )
}

export default Footer