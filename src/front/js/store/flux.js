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

				fetch("https://3001-coffee-alligator-settqjis.ws-us04.gitpod.io/api/login", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							return response.json();
						} else {
							alert("error" + response.status);
						}
					})
					.then(result => {
						alert(result.token);
						setStore({ permitir: true });
					})
					.catch(error => console.log("error", error));
			},

			changeNav: index => {
				setStore({ navState: index });
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

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-azure-mackerel-kfnf3914.ws-us04.gitpod.io/api/createUser", requestOptions)
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

				fetch("https://3001-azure-walrus-ksrnrz4p.ws-us04.gitpod.io/api/forgot_pass", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							return response.json();
						} else {
							alert("error" + response.status);
						}
					})
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
