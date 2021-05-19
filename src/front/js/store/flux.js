const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: {},
			navState: "externa",
			permitir: false,
			item: 1,
			check: false,
			stateAlert: "none",
			botPregunta: "block",
			aleatorioPregunta: "",
			respuestaRegistro: "",
			cuestionario: []
		},
		actions: {
			//traer info de usuario
			getName: () => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/usuario", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ currentUser: result }))
					.catch(error => console.log("error", error)); // alert(result))
			},
			//traer todas las preguntas de la bd
			traepreguntas: () => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/pregunta", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) return response.json();
					})
					.then(result => setStore({ cuestionario: result }))
					.catch(error => console.log("error", error));
			},
			//login
			getUser: (email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							return response.json();
						} else {
							alert("error " + response.status + " usuario o contraseña invalido");
						}
					})
					.then(result => {
						sessionStorage.setItem("token", result.token);
						setStore({ permitir: true });
					})
					.catch(error => console.log("error", error));
			},
			//registrar el usuario
			postUser: (nombre, contraseña, fecha, sexo, correo) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify([
					{
						name: nombre,
						password: contraseña,
						birthday: fecha,
						gender: sexo,
						email: correo,
						cant_question: "0",
						nota_alta: "0"
					}
				]);
				// console.log(raw);
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/usuario", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							setStore({ respuestaRegistro: "Registro exitoso" });
							return response.json();
						} else {
							alert("error " + response.status);
						}
					})
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			//recuperar contraseña
			postForgot: email => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/forgot_pass", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							return response.json();
						} else {
							alert("error" + response.status);
						}
					})
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			//cambio de la funcionalidad en el boton del nav
			changeNav: index => {
				setStore({ navState: index });
			},
			//contador de la pregunta actual en la realizacion del test
			changeitem: index => {
				setStore({ item: index });
			},
			//controla que el usuario haya seleccionado una respuesta en la pregunta del test
			setcheck: index => {
				setStore({ check: index });
			},
			//estado de la alerta al usuario si nó selecciono una opcion
			setDisplayAlert: index => {
				setStore({ stateAlert: index });
			},
			//mostrar u ocultar el boton de siguiente pregunta
			setBotPregunta: index => {
				setStore({ botPregunta: index });
			},
			//selector aleatorio de pregunta a mostrar
			setAleatorioPregunta: () => {
				let cantidad = Math.floor(Math.random() * (23 - 1)) + 1;
				setStore({ aleatorioPregunta: cantidad });
			},
			//deviolver el estado de inicio de sesion a cerrado
			setpermitir: index => {
				setStore({ permitir: index });
			}
		}
	};
};

export default getState;
