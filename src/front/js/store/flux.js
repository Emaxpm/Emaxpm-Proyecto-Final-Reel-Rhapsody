const apiUrl = process.env.BACKEND_URL + "/api"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			currentUser: null,
			films: [],
			film: [],
			serie: [],
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
			idsMovies: [906126, 572802, 1029575, 1071215, 695721, 1131755, 848326, 872585, 753342, 787699, 1143183, 901362, 1020006, 891699, 866398, 520758, 940551, 976573, 853387, 940721, 1022796, 951491, 1008042, 893723, 870358, 678512, 1075175, 762430, 508883, 1072790, 792307, 496450, 1061181, 928833, 744857, 673593, 459003, 1123093, 945937, 1146143, 1209770, 1036619, 1072342, 927107, 1118824, 915935, 840430, 1206029, 1220655, 842675, 955916, 1214849, 1113278, 1050035, 798362, 956920, 942881, 1160164, 666277, 1024773, 1585, 875188, 1107979, 1160003, 1211199, 626412, 500, 862552, 802219, 10494, 1221118, 558915, 664341, 365620, 983507, 978870, 1217348, 313369, 736554, 1209772, 1180706, 562, 1206988, 1062807, 868660, 845111, 980026, 850165, 149, 1027073, 889675, 1026563, 1020969, 1224569, 944401, 634429, 1131438, 792293, 892530, 1016084],
			idsSeries: [206559, 61818, 72879, 4614, 10980, 39351, 60625, 57041, 66465, 108978, 60694, 62643, 63770, 13897, 17610, 2625, 14944, 81329, 46952, 3269, 132544, 58841, 15260, 230525, 232937, 8514, 32798, 79061, 72649, 656, 32726, 12513, 47480, 4629, 209265, 235484, 60735, 14575, 651, 3782, 18347, 112470, 79744, 235493, 13881, 4419, 4057, 80748, 57243, 239559, 213026, 94372, 74016, 66840, 67136, 549, 30981, 62688, 37678, 239013, 215709, 43323, 32294, 216578, 240946, 108978, 141, 2691, 3452, 4583, 13895, 39297, 71790, 219109, 62649, 65503, 84910, 60059, 60797, 2153, 69050, 3437, 80350, 69158, 63247, 89293, 49011, 4606, 3828, 2181, 13893, 4333, 32632, 36361, 30984, 46260, 3673, 67667, 65763, 48891,]

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
							// agregar bearear en variable de entorno 
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

			loadOneMovie: async (id,) => {
				console.log(id)
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};
					fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
						.then(response => response.json())
						.then(response => setStore({ film: response }))
						.catch(err => console.error(err));
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			loadReviews: async (type, id) => {
				console.log(id)
				try {
					const response = await fetch(`${apiUrl}/reviews/${type}/${id}`)
					console.log(response)
					const res = await response.json()
					console.log(res)
					if (response.ok) {
						return res
					}
					return false
				} catch (error) {
					console.log("Error loading message from backend", error);
					return false
				}
			},

			addReview: async (type, reviewData) => {
				try {
					const response = await fetch(`${apiUrl}/reviews/${type}/${reviewData.id}`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + localStorage.getItem("token")
						},
						body: JSON.stringify(reviewData),
					});

					const res = await response.json();

					if (!response.ok) {
						throw new Error(res.msg || 'Failed to add review');
					}
					return true;
				} catch (error) {
					console.error('Error adding review', error);
					return false;
				}
			},

			loadOneSerie: async (id,) => {
				console.log(id)
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};
					fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
						.then(response => response.json())
						.then(response => setStore({ serie: response }))
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
							Authorization: 'Bearer ' + localStorage.getItem("token")
						}
					};
					const response = await fetch(`${apiUrl}/isAuth`, options)
					console.log(response)
					const res = await response.json()
					console.log(res)
					if (response.ok) {
						setStore({ currentUser: res })
						return null
					}
					setStore({ currentUser: false })
				} catch (error) {
					console.log("Error loading message from backend", error);
					setStore({ currentUser: false })
				}
			},

			editUser: async (formData) => {
				try {
					const actions = getActions()
					const response = await fetch(apiUrl + "/user", {
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
					const actions = getActions()
					localStorage.removeItem('token');
					setStore({ loggedUserId: null, favorites: [] });
					actions.isAuth()
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
						actions.getFavorite();
					} else {
						console.error("Failed to add favorite");
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

					const res = await response.json();
					console.log(res)
					// sacarle a res los ids y pedirle a la api externa las peliculas y series correspondientes a los mismos
					// guardar este array peliculas / series en una propiedad store 
					// mapear desde componentes favorito la propieadd store que fue creada  
					const store = getStore()
					setStore({ ...store, favorites: res })
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

			fetchMovieById: async (movieId) => {
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};

					const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
					const data = await response.json();

					if (response.ok) {
						return data;
					} else {
						console.error('Error fetching movie by ID:', data);
						throw new Error('Failed to fetch movie by ID');
					}
				} catch (error) {
					console.error('Error fetching movie by ID:', error);
					throw error;
				}
			},

			fetchSerieById: async (serieId) => {
				try {
					const options = {
						method: 'GET',
						headers: {
							accept: 'application/json',
							Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
						}
					};

					const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}?language=en-US`, options);
					const data = await response.json();

					if (response.ok) {
						return data;
					} else {
						console.error('Error fetching serie by ID:', data);
						throw new Error('Failed to fetch serie by ID');
					}
				} catch (error) {
					console.error('Error fetching serie by ID:', error);
					throw error;
				}
			},
		}
	};
};

export default getState;