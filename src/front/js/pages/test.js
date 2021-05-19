import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Preguntas } from "../component/preguntas";
import { Viewresultuser } from "../component/viewresultuser";

export const Test = () => {
	useEffect(() => {
		actions.changeNav("test");
	}, []);

	const { store, actions } = useContext(Context);
	const revisar = () => {
		store.check ? siguiente() : actions.setDisplayAlert("block");
	};
	const siguiente = () => {
		actions.setAleatorioPregunta();
		let conteo = store.item;
		conteo += 1;
		actions.changeitem(conteo);
		actions.setDisplayAlert("none");
		actions.setcheck(false);
	};

	return (
		<div className="container-fluid text-center p-3 Principal">
			<h1>Prueba lógica</h1>
			<div className="container-fluid">
				{store.item < 6 ? (
					<Preguntas
						frase={store.cuestionario[store.aleatorioPregunta].frase}
						pregunta={store.cuestionario[store.aleatorioPregunta].test_log}
					/>
				) : (
					<Viewresultuser />
				)}
			</div>
			<div className="mb-5" style={{ display: store.botPregunta }}>
				<i className="fas fa-arrow-circle-right" style={{ fontSize: 60 }} onClick={() => revisar()} />
				<h5>Siguiente</h5>
			</div>
		</div>
	);
};
