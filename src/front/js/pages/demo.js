import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

import test from "../../img/test.jpg";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const goPerfil = () => {
		return (window.location.href = "./perfil");
	};
	const gotest = () => {
		return (window.location.href = "./tipoTest");
	};
	useEffect(() => {
		actions.changeNav("principal");
		actions.getName();
	}, []);
	return (
		<div className="container-fluid text-center p-3 Principal">
			<div>
				<div className="container mt-5">
					<h1 id="title">Bienvenido {store.currentUser.name}</h1>
					<div className="row mt-5 mb-5">
						<div id="home" className="col-6 opcion text-center" onClick={() => goPerfil()}>
							<h1 className="textoGuia">Mi Perfil</h1>
						</div>

						<div id="test" className="col-6 opcion text-center" onClick={() => gotest()}>
							<h1 className="textoGuia">Inicia una prueba</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
