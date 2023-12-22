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
			],
			films: [],
			series: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a function
			loadSomeFilm: async () => {
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};
					fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
						.then(response => response.json())
						.then(response => setStore({ films: response.results }))
						.catch(err => console.error(err));

				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			loadSomeSerie: async () => {
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};

					fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
						.then(response => response.json())
						.then(response => setStore({ series: response.results }))
						.catch(err => console.error(err));

				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			sign_up: async (newUser) => {
				try {

					let result = await fetch(`${apiUrl}/sign_up`, {
						method: "POST",
						body: JSON.stringify(newUser),
						headers: {
							"Content-Type": "application/json"
						}
					})
					const data = await result.json()
					console.log("respuesta al intentar un new user:", data);
					return data
				} catch (e) {
					console.error(e)
				}
			},

			logIn: async (newLogIn) => {

				try {

					let result = await fetch(`${apiUrl}/login`, {
						method: "POST",
						body: JSON.stringify(newLogIn),
						headers: {
							"Content-Type": "application/json"
						}
					})

					const data = await result.json();
					console.log("respuesta al intentar iniciar sesión:", data);
					localStorage.setItem("token", data.token);
					return data;

				} catch (e) {
					console.error(e);
				}
			},
			logout: async () => {
				try {
					localStorage.removeItem('token');
					return true;
				} catch (error) {
					console.error('Error during logout:', error);
					return false;
				}
			},

			addFavorite: (item) => {

				const store = getStore();

				if (item && item.id !== undefined && item.id !== null) {
					const isAlreadyAdded = store.favorites.some(favorite => favorite.id === item.id);

					if (!isAlreadyAdded) {
						setStore({ ...store, favorites: [...store.favorites, item] });
					}
				} else {
					console.error("El objeto 'item' no tiene una propiedad 'id' válida.");
				}
			},

			updateFavorites: (itemToRemove) => {
				console.log("Item received to remove:", itemToRemove);
				const store = getStore();

				if (
					itemToRemove &&
					Object.prototype.hasOwnProperty.call(itemToRemove, 'id') &&
					itemToRemove.id !== undefined &&
					itemToRemove.id !== null
				) {
					const updatedFavorites = store.favorites.filter(
						favorite => favorite.id !== itemToRemove.id
					);

					setStore({ ...store, favorites: updatedFavorites });
				} else {
					console.error("El objeto 'item' no tiene una propiedad 'id' válida.");
				}
			},

		}
	};
};

export default getState;