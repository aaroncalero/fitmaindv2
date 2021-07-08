import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Recuperacion = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [Respuesta, setRespuesta] = useState("");

	const mensajeRecupera = () => {
		//alert(store.respuestaRecupera);
		if (store.respuestaRecupera == true) {
			const MySwal = withReactContent(Swal);
			MySwal.fire("Contraseña enviada Exitosamente").then(value => {
				window.location.href = "./";
			});
		} else {
			const MySwal = withReactContent(Swal);
			MySwal.fire("Contraseña enviada Exitosamente!").then(value => {
				window.location.href = "./";
			});
		}
	};

	const enviarKey = email => {
		actions.postForgot(email);
		setTimeout(() => mensajeRecupera(), 2000);
	};

	function validateForm() {
		return email.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
	}

	useEffect(() => {
		actions.changeNav("principal");
	}, []);
	return (
		<div className="text-center mt-5 mb-5">
			<div className="container">
				<h3 className="mt-3">
					<strong>Recupera tu contraseña</strong>
				</h3>
				<div className="row text-center">
					<div className="col-4" />
					<div className="col-4">
						<Form className="mt-3" onSubmit={handleSubmit}>
							<Form.Group size="text" controlId="email">
								<Form.Label>
									{" "}
									<div style={{ color: "white" }}>
										Utiliza una direccion registrada en el sistema.
									</div>
								</Form.Label>
								<br />
								<br />
								<Form.Control
									autoFocus
									type="email"
									placeholder="Correo electrónico"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<div id="emailHelp" className="form-text mb-2" style={{ color: "white" }}></div>
							</Form.Group>
							<button
								type="button"
								className="btn btn-success m-3"
								disabled={!validateForm()}
								onClick={() => enviarKey(email)}>
								Enviar
							</button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};
