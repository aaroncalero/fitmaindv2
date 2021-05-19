const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			navState: "externa",
			permitir: false
		},
		actions: {
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

				fetch("https://3001-pink-halibut-gfbh3zr8.ws-us04.gitpod.io/api/login", requestOptions)

					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							return response.json();
						} else {
							alert("error" + response.status);
						}
					})
					.then(result => {
						sessionStorage.setItem("token", result.token);
						setStore({ permitir: true });
					})
					.catch(error => console.log("error", error));
			},
			getName: () => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://3001-pink-halibut-gfbh3zr8.ws-us04.gitpod.io/api/consultaUser", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ currentUser: result.msg }))
					.catch(error => console.log("error", error)); // alert(result))
			},

			postUser: (name, password, birth, gender, correo) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify([
					{
						name: name,
						password: password,
						birthday: birth,
						gender: gender,
						email: correo
					}
				]);
				console.log(raw);
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/createUser", requestOptions)
					.then(response => {
						if (response.status == 200) {
							return response.json();
						}
					})
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
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

				fetch("https://3001-pink-halibut-gfbh3zr8.ws-us04.gitpod.io/api/forgot_pass", requestOptions)
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

			changeNav: index => {
				setStore({ navState: index });
			}
		}
	};
};

export default getState;
