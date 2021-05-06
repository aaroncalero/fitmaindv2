const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			navState: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => {
			// 			setStore({ message: data.message });
			// 			console.log(message);
			// 		})
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
			changeNav: index => {
				setStore({ navState: index });
			}
		}
	};
};

export default getState;
