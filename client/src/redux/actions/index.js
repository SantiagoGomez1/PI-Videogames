import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_BY_ID = "GET_BY_ID";

export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";

export const SORT_VIDEOGAME = "SORT_VIDEOGAME";
export const SORT_RATING = "SORT_RATING";
export const SORT_RATING_MAYOR = "SORT_RATING_MAYOR";

export const getGames = () => (dispatch) => {
  return fetch("https://umbrella-games.herokuapp.com/videogames")
    .then((response) => response.json())
    .then((games) => {
      dispatch({ type: "GET_ALL_VIDEOGAMES", payload: games });
    });
};

export const getByName = (name) => (dispatch) => {
  return fetch(`https://umbrella-games.herokuapp.com/videogames?name=${name}`)
    .then((response) => response.json())
    .then((games) => {
      if (games.error) return alert("Ingresar un juego valido.");
      dispatch({ type: "GET_ALL_VIDEOGAMES", payload: games });
    });
};

export const getById = (id) => async (dispatch) => {
  let game = await axios.get(`https://umbrella-games.herokuapp.com/videogames/${id}`);
  return dispatch({ type: "GET_BY_ID", payload: game.data });
};

export const deleteById = (id) => async () => {
  await axios.delete(`https://umbrella-games.herokuapp.com/videogames/${id}`);
};

export const getGenres = () => (dispatch) => {
  return fetch(`https://umbrella-games.herokuapp.com/genres`)
    .then((response) => response.json())
    .then((genres) => {
      dispatch({ type: "GET_GENRES", payload: genres });
    });
};

export const filterGenres = (payload) => {
  return {
    type: "FILTER_BY_GENRE",
    payload,
  };
};

export const filterGamesCreated = (payload) => {
  return {
    type: "FILTER_BY_CREATED",
    payload,
  };
};

export const sortVideogame = (payload) => {
  return {
    type: "SORT_VIDEOGAME",
    payload,
  };
};

export const sortRating = (payload) => {
  return {
    type: "SORT_RATING",
    payload,
  };
};

// HECHO DURANTE LA CORRECION EN VIVO

// export const sortRatingMayora3 = (payload) => {
//   return {
//     type: "SORT_RATING_MAYOR",
//     payload
//   };
// };
