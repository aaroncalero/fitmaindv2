import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/perfil.scss";

import foto from "../../img/perfil.jpg";

export const Perfil = () => {
	useEffect(() => {
		actions.changeNav("interna");
	}, []);
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-1">
			{/* <div className=" caja container">
				<div className="row">
					<div className="col-2 p-2">
						<img className="img-fluid" style={{ borderRadius: "5%" }} src={foto} />
					</div>
					<div className="text-left col-10">
						<h1 id="usern">Nombre_de_usuario</h1>
					</div>
				</div>
			</div> */}
			<div className="divpinta caja container ">
				<div className="row">
					<div className="col-lg-12  mt-3">
						<div>
							<div>
								<div>
									<img id="avatar" className="img-fluid" src={foto} />
									<h4>Nombre_usuario</h4>
								</div>
							</div>

							<div className="data">
								<ul className="list-unstyled">
									<li>
										<p>
											<strong className="datos">Correo:</strong> <span>mail@example.com</span>
										</p>
									</li>
									<li>
										<p>
											<strong className="datos">Fecha de Nacimiento:</strong>{" "}
											<span>15/5/2017</span>
										</p>
									</li>
									<li>
										<p>
											<strong className="datos">Genero:</strong> <span>Hombre</span>
										</p>
									</li>
									<li>
										<p>
											<strong className="datos">Total de pruebas realizadas:</strong>{" "}
											<span>0</span>
										</p>
									</li>
									<li>
										<p>
											<strong className="datos">Nota más Alta:</strong> <span>0</span>
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/*<form>
					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Correo Electrónico</label>
						<div className="col-sm-10">
							<label className=" text-start">email@example.com</label>
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
								// value="4/Julio/2000"
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
								// value="Hombre"
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
				</form>*/}
			</div>
		</div>
	);
};
