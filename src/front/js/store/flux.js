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
			films: []
		},
		actions: {
			// Use getActions to call a function within a function
			loadSomeFilm: async () => {
				try{
					const options = {
						method: 'GET',
						headers: {
						  accept: 'application/json',
						  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};
					  
					fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
						.then(response => response.json())
						.then(response => setStore({films:response.results}))
						.catch(err => console.error(err));
											
					// Resto del código comentado...
				} catch(error) {
					console.log("Error loading message from backend", error);
				}
			}
		}
	};
};

export default getState;
// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			message: null,
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			], 
// 			films: [

// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			loadSomeFilm: async () => {
// 				try{
// 					const options = {
// 						method: 'GET',
// 						headers: {
// 						  accept: 'application/json',
// 						  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
// 						}
// 					  };
					  
// 					  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
// 						.then(response => response.json())
// 						.then(response => console.log(response))
// 						.catch(err => console.error(err));
// 				// const response= await fetch ("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
// 				// if(response.ok){
// 				// 	const data=await response.json();
// 				// 	let store= getStore();
// 				// 	setStore({...store,films:data.results});
// 				// 	console.log(data.results)
// 				// }
// 				// }catch(error){
// 				// 	console.log("Error loading message from backend", error)
// 				 }
			
// 		}
// 	};
// };

// export default getState;
