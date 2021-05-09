import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/perfil.scss";

import ejemplo from "../../img/example.gif";

export const Test = () => {
	useEffect(() => {
		actions.changeNav("interna");
	}, []);
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-1 mb-5">
			<img src={ejemplo} />
		</div>
	);
};
