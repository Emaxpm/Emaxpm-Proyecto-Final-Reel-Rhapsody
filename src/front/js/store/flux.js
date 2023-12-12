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
			], 
			Character: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			loadSomePeople: async () => {
				try{
				const response= await fetch ("https://swapi.dev/api/people")
				if(response.ok){
					const data=await response.json();
					let store= getStore();
					setStore({...store,Character:data.results});
					console.log(data)
				}
				}catch(error){
					console.log("Error loading message from backend", error)
				} 
			},
		}
	};
};

export default getState;
