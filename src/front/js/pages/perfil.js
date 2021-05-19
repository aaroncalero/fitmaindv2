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
		<div className="container-fluid text-center p-3 Principal">
			<div className="text-center mt-1 mb-5">
				<div className="caja container ">
					<div className="row">
						<div className="col-lg-12  mt-3">
							<div>
								<div>
									<div>
										<img id="avatar" src={foto} />
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
				</div>
			</div>
		</div>
	);
};
