import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/nav.scss";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const accion = () => {
		if (store.navLavel == "Salir") {
			return (window.location.href = "./");
		} else {
			return (window.location.href = "./registerUser");
		}
	};
	return (
		<nav className="navbar  mb-3">
			<Link to="/">
				<img style={{ width: "4rem" }} src={logo} />
			</Link>
			<div className="mx-auto">
				<h1 id="title">FitMind</h1>
			</div>
			<div className="ml-auto">
				<Link>
					<button className="btn btn-light" onClick={() => accion()}>
						{store.navLavel}
					</button>
				</Link>
			</div>
		</nav>
	);
};
