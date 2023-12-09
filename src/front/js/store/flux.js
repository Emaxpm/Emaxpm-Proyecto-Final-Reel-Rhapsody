const apiUrl = process.env.BACKEND_URL
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			signup: async (newUser) => {

				try {

					const response = await fetch(apiUrl, {
						method: "POST",
						body: JSON.stringify(newUser),
						headers: {
							"Content-Type": "application/json"
						}

					});

					if (!response.ok) {
						let errorMessage = "Error with the request";

						// Si la respuesta tiene un cuerpo (content-type es application/json), intenta obtener más detalles del error
						if (response.headers.get('content-type')?.includes('application/json')) {
							const errorData = await response.json();
							if (errorData && errorData.error) {
								errorMessage = errorData.error; // Usa el mensaje de error proporcionado por la API
							}
						}

						throw new Error(errorMessage);
					}

					const data = await response.json();
					console.log("respuesta al intentar un new user:", data);
					return data; // Podrías devolver los datos si es relevante para tu flujo de la aplicación

				} catch (error) {
					console.error("Error al intentar registrar un nuevo usuario:", error.message);
					throw error; // Propaga el error para que se maneje donde se llame a esta función
				}
			}

		}
	};
};

export default getState;
