import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import DetailMovie from "../component/DetailMovie.jsx";

export const Single = props => {

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
