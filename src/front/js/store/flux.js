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
			actor: [],
			OneActor: [],
			favorites: [],
			pagesMovies: 1,
			totalPagesMovies: 1,
			pagesSeries: 1,
			totalPagesSeries: 1
		},
		actions: {
			loadSomeFilm: async (numberOfPage = 1) => {

				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};
					fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${numberOfPage}`, options)
						.then(response => response.json())
						.then(response => setStore({ films: response.results, pagesMovies: response.page, totalPagesMovies: response["total_pages"] }))
						.catch(err => console.error(err));

				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			loadSomeSerie: async (numberOfPage = 1) => {
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};

					fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${numberOfPage}`, options)
						.then(response => response.json())
						.then(response => setStore({ series: response.results, pagesSeries: response.page, totalPagesSeries: response["total_pages"] }))
						.catch(err => console.error(err));

				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			loadSomeActors: async () => {
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};

					fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
						.then(response => response.json())
						.then(response => setStore({ actor: response.results }))
						.catch(err => console.error(err));

				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			loadOneActor: async (id) => {
				console.log(id)
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};
					fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`, options)
						.then(response => response.json())
						.then(response => setStore({ OneActor: response }))
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

			addFavorite: async (item, type) => {
				console.log(item)
				try {
					const store = getStore();
					const token = localStorage.getItem("token");
					if (!store.favorites.some(favorite => favorite.movie_id === item.id && favorite.serie_id === item.id)) {
						const response = await fetch(apiUrl + '/user/favorites', {
							body: JSON.stringify({
								movie_id: type === "movie" ? item.id : null,
								serie_id: type === "serie" ? item.id : null
							}),
							method: "POST",
							headers: {
								'Content-type': 'application/json; charset=UTF-8',
								"Authorization": `Bearer ${token}`,
							}
						});
						console.log(response);
						const res = await response.json();
						console.log(res);

						setStore({
							favorites: [...store.favorites, {
								movie_id: type === "movie" ? item.id : null,
								serie_id: type === "serie" ? item.id : null
							}]
						});
					} else {
						alert("ese favorito ya existe")
					}

				} catch (e) {
					console.error(e);
				}
			},

			getFavorite: async () => {
				try {
					const token = localStorage.getItem("token");
					const response = await fetch(apiUrl + '/user/favorites', {
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
							"Authorization": `Bearer ${token}`,
						}
					});
					console.log(response);
					const res = await response.json();
					console.log(res);
					if (response.ok) {
						setStore({ favorites: res });
					}


				} catch (e) {
					console.error(e);
				}
			},

			updateFavorites: async (itemToRemove) => {
				try {

					console.log("Item received to remove:", itemToRemove);
					const store = getStore();

					const response = await fetch(apiUrl + "/user/favorite", {
						method: "DELETE",
						body: JSON.stringify(itemToRemove),
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
							"Authorization": `Bearer ${token}`,
						}
					})
					if (!response.ok) {
						throw new Error("no se pudo eliminar")
					}

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

				} catch (error) {
					console.error(error)
				}
			},
		}
	};
};

export default getState;