import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Row, Col, Form, Label, Input, FormGroup, Button } from "reactstrap";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/registeruser.scss";

export const RegisterUser = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5" id="divpinta">
			<div className="content mr-3">
				<img className="imagen1" src={rigoImageUrl} />
			</div>
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
							/>
						</FormGroup>
						<FormGroup>
							<Label>Contraseña</Label>
							<Input type="password" name="password" />
						</FormGroup>
						<FormGroup>
							<Label>Confirmar Contraseña</Label>
							<Input type="password" name="repeatPassword" />
						</FormGroup>
						<FormGroup>
							<Label>Fecha de Nacimiento</Label>
							<Input type="date" name="edad" />
						</FormGroup>
						<FormGroup>
							<Label>Genero</Label>
							<Input type="select" name="select" id="SelectGender">
								<option>Seleccione Genero</option>
								<option>Femenino</option>
								<option>Masculino</option>
							</Input>
						</FormGroup>
						<FormGroup>
							<Label>Correo Electrónico</Label>
							<Input placeholder="Correo Electronico" type="email" name="correo" />
						</FormGroup>
						<br />
						<FormGroup>
							<Button color="danger">Registrarse</Button>
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
			<br />
			<div className="text-center alert alert-info" id="alert_inf">
				{store.message || "Loading message from the backend..."}
			</div>
		</div>
	);
};
