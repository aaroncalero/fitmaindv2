import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Row, Col, Form, Label, Input, FormGroup, Button } from "reactstrap";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/registeruser.scss";

export const RegisterUser = () => {
	useEffect(() => {
		actions.changeNav("principal");
	}, []);
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [birth, setBirth] = useState("");
	const [gender, setGender] = useState("");
	const [correo, setCorreo] = useState("");

	return (
		<div className="divpinta">
			<Row>
				<Col xs="3" />
				<Col xs="6">
					<h1 className="text-center">Registro de Usuario!</h1>
					<Form>
						<FormGroup>
							<Label>Nombre de Usuario</Label>
							<Input
								className="form-control"
								placeholder="Como quiere que se le conozca"
								type="text"
								name="nombre"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Contraseña</Label>
							<Input
								type="password"
								name="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Confirmar Contraseña</Label>
							<Input
								type="password"
								name="repeatPassword"
								//value={password2}
								//onChange={e => setPassword2(e.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Fecha de Nacimiento</Label>
							<Input type="date" name="edad" value={birth} onChange={e => setBirth(e.target.value)} />
						</FormGroup>
						<FormGroup>
							<Label>Genero</Label>
							<Input
								type="select"
								name="select"
								id="SelectGender"
								value={gender}
								onChange={e => setGender(e.target.value)}>
								<option>Seleccione Genero</option>
								<option>Femenino</option>
								<option>Masculino</option>
							</Input>
						</FormGroup>
						<FormGroup>
							<Label>Correo Electrónico</Label>
							<Input
								placeholder="Correo Electronico"
								type="email"
								name="correo"
								value={correo}
								onChange={e => setCorreo(e.target.value)}
							/>
						</FormGroup>
						<br />
						<FormGroup>
							<Button
								color="danger"
								onClick={() => actions.postUser(name, password, birth, gender, correo)}>
								Registrarse
							</Button>
						</FormGroup>
						<br />
						<div className="formulario__grupo formulario__formulario-error" id="formulario__error">
							<p className="message__error" id="message__error" style={{ margin: 0 }}>
								<i className="fas fa-exclamation-triangle" />
								Error llenar todos los campos
							</p>
						</div>
					</Form>
				</Col>
			</Row>
		</div>
	);
};
