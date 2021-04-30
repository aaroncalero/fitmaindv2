const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			navLavel: "Registrarse"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeNav: index => {
				if (index == "1") {
					setStore({ navLavel: "Salir" });
				} else {
					setStore({ navLavel: "Registrarse" });
				}
			}
		}
	};
};

export default getState;
