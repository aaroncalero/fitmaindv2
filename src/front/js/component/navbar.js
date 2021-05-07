import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/nav.scss";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className=" divpinta navbar  mb-3">
			<Link to="/">
				<img style={{ width: "4rem" }} src={logo} />
			</Link>
			<div className="mx-auto">
				<h1 id="title">FitMind</h1>
			</div>
			<div className="ml-auto">
				{store.navState == "externa" ? (
					<Link to="/registerUser">
						<button className="btn btn-light">Regístrate</button>
					</Link>
				) : store.navState == "principal" ? (
					<Link to="/">
						<button className="btn btn-light">Salir</button>
					</Link>
				) : (
					<Link to="/demo">
						<button className="btn btn-light">Volver</button>
					</Link>
				)}
			</div>
		</nav>
	);
};
