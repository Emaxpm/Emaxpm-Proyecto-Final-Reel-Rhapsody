import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import DetailMovie from "../component/DetailMovie.jsx";


export const Single = props => {
	const params = useParams()

	return (
		<>

			<h2 className="title">Movie</h2>
			<DetailMovie />
			
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
