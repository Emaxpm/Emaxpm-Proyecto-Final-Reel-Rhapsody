const apiUrl = process.env.BACKEND_URL + "/api" 
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

			apiFetch: async (endPoint, method="GET", isProtected = false, body = null ) => {

				try {

					const params = {
						method,
						headers:{}
					}
					if(body){
						params.body = JSON.stringify(body)
						params.headers["Content-Type"] = "application/json"
					}

					if(isProtected){
						// Aqui hay que agregar el encabezado de autorizacion
					}

					const response = await fetch(apiUrl + endPoint, params);

					if (!response.ok) {
						console.error(response.statusText)

						if (response.headers.get('content-type')?.includes('application/json')) {
							const errorData = await response.json();
							if (errorData && errorData.error) {
								errorMessage = errorData.error;
							}
						}

						throw new Error(errorMessage);
					}

					const data = await response.json();
					return {data, ok:true};

				} catch (error) {
					console.error("Error al intentar registrar un nuevo usuario:", error.message);
					return{ok:false, error}
				}

			},

			signup: async (newUser) => {

				const {apiFetch} = getActions()
				const data = apiFetch("/signup", "POST", false, newUser)
				if(data.ok){
				}else{return}
			}

		}
	};
};

export default getState;
