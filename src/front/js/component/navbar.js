import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/nav.scss";

export const Navbar = () => {
	return (
		<nav className="navbar  mb-3">
			<Link to="/">
				<img style={{ width: "4rem" }} src={logo} />
			</Link>
			<div className="mx-auto">
				<h1 id="title">FitMind</h1>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-light">Register</button>
				</Link>
			</div>
		</nav>
	);
};
