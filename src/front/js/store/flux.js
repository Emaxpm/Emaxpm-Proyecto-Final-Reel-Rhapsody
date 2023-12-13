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
			films: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeFilm: async () => {
				try{
				const response= await fetch ("https://api.themoviedb.org/3/trending/all/day?api_key=353ecf1e8e030c757a90feed45805f63")
				if(response.ok){
					const data=await response.json();
					let store= getStore();
					setStore({...store,films:data.results});
					console.log(data.results)
				}
				}catch(error){
					console.log("Error loading message from backend", error)
				} 
			},
		}
	};
};

export default getState;
