import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.changeNav("1");
	});

	return <div className="container">Hola</div>;
};
