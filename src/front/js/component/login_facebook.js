import React from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";

export const LoginFacebook = () => {
	const responseFacebook = response => {
		window.location.href = "./demo";
		console.log(response);
	};
	return (
		<FacebookLogin
			appId="296149248885803"
			autoLoad={false}
			fields="name,email,picture"
			callback={responseFacebook}
			textButton="Inicio de sesion Facebook"
			icon="fa-facebook"
		/>
	);
};
