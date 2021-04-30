import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";

import "../../styles/recuperacion.scss";

export const Recuperacion = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [Respuesta, setRespuesta] = useState("");

	function validateForm() {
		return email.length > 0 && Respuesta.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="text-center mt-5 mb-5">
			<div className="container">
				<h5 className="mt-3">
					<strong>Recupera tu contraseña</strong>
				</h5>
				<div className="row text-center">
					<div className="col-4" />
					<div className="col-4">
						<Form className="mt-3" onSubmit={handleSubmit}>
							<Form.Group size="text" controlId="email">
								<Form.Label>Correo electrónico</Form.Label>
								<Form.Control
									autoFocus
									type="email"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<div id="emailHelp" className="form-text mb-2" style={{ color: "gray" }}>
									Utiliza una direccion registrada en el sistema.
								</div>
							</Form.Group>
							<Form.Group size="text" controlId="pregunta">
								<Form.Label>Pregunta</Form.Label>

								<Form.Control
									type="text"
									value={Respuesta}
									onChange={e => setRespuesta(e.target.value)}
								/>
							</Form.Group>
							<Link to="/">
								<button
									type="button"
									className="btn btn-success m-3"
									disabled={!validateForm()}
									onClick={() => alert("Contraseña enviada a tu correo electronico")}>
									Enviar
								</button>
							</Link>
							<Link to="/">
								<button type="button" className="btn btn-danger m-3">
									Salir
								</button>
							</Link>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};
