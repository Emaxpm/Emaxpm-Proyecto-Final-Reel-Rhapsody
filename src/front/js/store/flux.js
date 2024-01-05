const isDuplicate = (favorites, item, type) => {
	if (type === 'movie') {
		return favorites.some(favorite => favorite.movie_id === item.id);
	} else if (type === 'serie') {
		return favorites.some(favorite => favorite.serie_id === item.id);
	}
	return false;
};
const apiUrl = process.env.BACKEND_URL + "/api"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			currentUser: null,
			films: [],
			series: [],
			actor: [],
			OneActor: [],
			favorites: [],
			custom: [],
			currentEdit: {
			},
			pagesMovies: 1,
			totalPagesMovies: 1,
			pagesSeries: 1,
			totalPagesSeries: 1,
			pagesActors: 1,
			totalPagesActors: 1,
			loggedUserId: null,
		},
		actions: {
			loadSomeFilm: async (numberOfPage = 1) => {

				try {
					const store = getStore();
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
			loadSomeActors: async (numberOfPage = 1) => {
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};

					fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${numberOfPage}`, options)
						.then(response => response.json())
						.then(response => setStore({ actor: response.results, pagesActors: response.page, totalPagesActors: response["total_pages"] }))
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

			isAuth: async () => {
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer ' + localStorage.getItem("token")
						}
					};
					const response = await fetch(`${apiUrl}/isAuth`, options)
					console.log(response)
					const res = await response.json()
					console.log(res)
					setStore({ currentUser: res })
				} catch (error) {
					console.log("Error loading message from backend", error);
					setStore({ currentUser: false })
				}
			},

			editUser: async (formData) => {
				try {
					const actions = getActions()
                    const response = await fetch(apiUrl+"/user", {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + localStorage.getItem("token")
                        },
                        body: JSON.stringify(formData)						
                    });
					console.log(formData)
                    if (response.ok) {
                        const res = await response.json();
                        actions.isAuth()
						console.log(res)
						return res
                    } else {
                        
                        console.error('Error editing user:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error editing user:', error);
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
					setStore({ loggedUserId: data.id });
					return data;

				} catch (e) {
					console.error(e);
				}
			},

			logout: async () => {
				try {
					localStorage.removeItem('token');
					setStore({ loggedUserId: null, favorites: [] }); // Limpiar datos del usuario al cerrar sesión
					return true;
				} catch (error) {
					console.error('Error during logout:', error);
					return false;
				}
			},


			addFavorite: async (item, type) => {
				try {
					const store = getStore();
					const actions = getActions();
					const token = localStorage.getItem("token");

					if (!isDuplicate(store.favorites, item, type)) {
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

						if (response.ok) {
							const res = await response.json();
							console.log(res);
							// setStore({
							// 	favorites: [...store.favorites, {
							// 		movie_id: type === "movie" ? item.id : null,
							// 		serie_id: type === "serie" ? item.id : null
							// 	}]
							// });
							actions.getFavorite(store.loggedUserId);
						} else {
							console.error("Failed to add favorite");
						}
					} else {
						alert("¡Ese favorito ya existe!");
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


					if (!response.ok) {
						console.error(response.statusText)
						return
					}
					const res = await response.json();
					setStore({ favorites: res })
					// const currentFavorites = getStore().favorites;
					// if (JSON.stringify(currentFavorites) !== JSON.stringify(res)) {
					// 	setStore({ favorites: res });
					// }

				} catch (e) {
					console.error(e);
				}
			},

			updateFavorites: async (itemToRemove) => {
				try {
					const token = localStorage.getItem("token");
					console.log("Item received to remove:", itemToRemove);

					const response = await fetch(apiUrl + "/user/favorite", {
						method: "DELETE",
						body: JSON.stringify(itemToRemove),
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
							"Authorization": `Bearer ${token}`,
						}
					});

					if (!response.ok) {
						throw new Error("Unable to delete");
					}

					const store = getStore();
					const updatedFavorites = store.favorites.filter(favorite => favorite.id !== itemToRemove.id);
					setStore({ favorites: updatedFavorites });
				} catch (error) {
					console.error(error);
				}
			},

		}
	};
};

export default getState;