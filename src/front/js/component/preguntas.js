import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Animado from "../../img/anime.gif";
import "../../styles/pregunta.scss";
import { Context } from "../store/appContext";
import { Row, Col, Form, Label, Input, FormGroup, Button } from "reactstrap";
import PropTypes from "prop-types";

export const Preguntas = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.setBotPregunta("block");
	}, []);
	const seleccionado = () => {
		actions.setcheck(true);
		actions.setDisplayAlert("none");
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-3 text-left">
					<div className="container">
						<spam className="globo i abajo-derecha text-center ">{props.frase}</spam>
					</div>
					<img className="gif" src={Animado} />
				</div>

				<div className="col-9 mt-5 text-left">
					<div className="container">
						<h6 id="item">Pregunta {store.item}/5</h6>
						<p>{props.pregunta}</p>
						<div className="row mt-5">
							<div className="col-9 text-center">
								<Form>
									<FormGroup>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="flexRadioDefault"
												id="flexRadioDefault1"
												onChange={() => seleccionado()}
											/>
											<Label className="form-check-label" for="flexRadioDefault1">
												{props.respuesta1}
											</Label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="flexRadioDefault"
												id="flexRadioDefault2"
												onChange={() => seleccionado()}
											/>
											<Label className="form-check-label" for="flexRadioDefault2">
												{props.respuesta2}
											</Label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="flexRadioDefault"
												id="flexRadioDefault3"
												onChange={() => seleccionado()}
											/>
											<Label className="form-check-label" for="flexRadioDefault3">
												{props.respuesta3}
											</Label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="flexRadioDefault"
												id="flexRadioDefault4"
												onChange={() => seleccionado()}
											/>
											<Label className="form-check-label" for="flexRadioDefault4">
												{props.respuesta4}
											</Label>
										</div>
									</FormGroup>
									<div style={{ color: "red", display: store.stateAlert }}>
										<i className="fas fa-exclamation-triangle" /> Debe Marcar al menos una
										respuesta!
									</div>
								</Form>
							</div>
							<div className="col-3 text-center mt-5"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Preguntas.propTypes = {
	frase: PropTypes.string,
	pregunta: PropTypes.string,
	respuesta1: PropTypes.string,
	respuesta2: PropTypes.string,
	respuesta3: PropTypes.string,
	respuesta4: PropTypes.string
};
