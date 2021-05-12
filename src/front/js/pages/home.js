import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import TextInput from "react-autocomplete-input";
import { Accordion } from "react-bootstrap";

export const Home = () => {
	useEffect(() => {
		actions.changeNav("externa");
	}, []);
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
	}
	const validacion = (email, password) => {
		actions.getUser(email, password);
		setTimeout(() => permitir(), 2000);
	};
	const permitir = () => {
		if (store.permitir === true) {
			actions.changeNav(true);
			window.location.href = "./demo";
		}
	};

	return (
		<div className="container mb-5">
			<div className="row">
				<div id="info" className="col-8 mt-3 text-center p-5">
					<p className="text-break mt-5">
						FitMind es una aplicación web que le permite mejorar sus conocimientos en áreas
						lógico-matemáticos y de compresión de lectura a un nivel que, aun siendo riguroso, sea lo
						suficientemente sencillo. Con esto buscamos mejorar su capacidad para resolver problemas en
						procedimientos matemáticos, así como la comprensión de lectura que le serán útil para diversos
						campos profesionales y estudiantiles.
						<h3 className="mt-3 mb-2 beneficios">Beneficios</h3>
						<ul className="list-unstyled mt-2">
							<li>
								<p>Mayor conocimiento</p>
							</li>
							<li>
								<p>Comprensión de lectura</p>
							</li>
							<li>
								<p>Lógica - matemática</p>
							</li>
						</ul>
					</p>
				</div>
				<div className="col-4 text-center mt-5 mb-5 login" style={{ color: "white" }}>
					<div className=" text-left">
						<h5 className="mt-3">
							<strong>Inicia sesión</strong>
						</h5>
						<Form className="mt-5" onSubmit={handleSubmit}>
							<Form.Group size="lg" controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control
									autoFocus
									type="email"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<br />
							</Form.Group>
							<Form.Group size="lg" controlId="password">
								<Form.Label>Password</Form.Label>
								<Form.Control
									autoComplete="off"
									type="password"
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
								<br />
							</Form.Group>

							<button
								type="submit"
								className="btn btn-primary btn-lg btn-block"
								disabled={!validateForm()}
								onClick={() => validacion(email, password)}>
								Login
							</button>

							<Link to="/recuperacion">
								<p className="mt-2" style={{ color: "blue" }}>
									Recuperar contraseña
								</p>
							</Link>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};
