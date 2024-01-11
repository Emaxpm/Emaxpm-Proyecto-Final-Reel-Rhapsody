import React from "react";
import { useParams } from "react-router-dom";
import DetailSerie from "../component/DetailSerie.jsx";

const ViewSerie = () => {
    const params = useParams(); // Obtener los parámetros de la URL

    return (
        <>
            <h2 className="title">Serie</h2>
            <DetailSerie params={params} /> {/* Pasar los parámetros como prop */}
        </>
    );
};

export default ViewSerie;

