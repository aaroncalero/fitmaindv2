import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/perfil.scss";

import foto from "../../img/perfil.jpg";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.changeNav("3");
	});
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="text-center mt-5">
			<div className=" caja container">
				<div className="row">
					<div className="col-2 p-2">
						<img className="img-fluid" style={{ borderRadius: "5%" }} src={foto} />
					</div>
					<div className="text-left col-10">
						<h1 id="usern">Nombre_de_usuario</h1>
					</div>
				</div>
			</div>
			<div className=" caja container mt-5 mb-5 p-3">
				<form>
					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Correo Electrónico</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="perfil form-control-plaintext"
								id="staticEmail"
								value="email@example.com"
							/>
						</div>
					</div>

					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Fecha de Nacimiento</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="perfil form-control-plaintext"
								id="staticEmail"
								value="4/Julio/2000"
							/>
						</div>
					</div>

					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Genero</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="perfil form-control-plaintext"
								id="staticEmail"
								value="Hombre"
							/>
						</div>
					</div>

					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Pruebas realizadas</label>
						<div className="col-sm-10">
							<input type="text" className="perfil form-control-plaintext" id="staticEmail" value="0" />
						</div>
					</div>

					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Nota más Alta</label>
						<div className="col-sm-10">
							<input type="text" className="perfil form-control-plaintext" id="staticEmail" value="0" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
