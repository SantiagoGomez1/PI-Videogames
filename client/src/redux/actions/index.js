export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_BY_ID = "GET_BY_ID";

export const getGames = () => (dispatch) => {
  return fetch("http://localhost:3001/videogames")
    .then((response) => response.json())
    .then((games) => {
      dispatch({ type: "GET_ALL_VIDEOGAMES", payload: games });
    });
};

export const getByName = (name) => (dispatch) => {
  return fetch(`http://localhost:3001/videogames?name=${name}`)
    .then((response) => response.json())
    .then((games) => {
      if(games.error)return alert("Ingresar un juego valido.")
      dispatch({ type: "GET_ALL_VIDEOGAMES", payload: games });
    })
};

export const getById = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/videogames/${id}`)
    .then((response) => response.json())
    .then((game) => {
      dispatch({ type: "GET_BY_ID", payload: game });
    })
};

export const getGenres = () => (dispatch) => {
  return fetch(`http://localhost:3001/genres`)
    .then((response) => response.json())
    .then((genres) => {
      dispatch({ type: "GET_GENRES", payload: genres });
    });
};
