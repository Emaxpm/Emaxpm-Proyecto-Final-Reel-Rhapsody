import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">

		<div className="d-grid gap-2 d-md-flex justify-content-md-end">
			<Link to="/payment"className="btn btn-warning" type="button">Donations</Link>
		</div>

	</footer>
);
