require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame } = require("../../db.js");

// --------------- GET A LA API ----------------- \\

const getGames = async (name) => {
  let gamesApi = [];
  // CAMBIAR METODO PARA TRAER LOS 100 JUEGOS (MEJORAR EL TIEMPO) \\
  for (let i = 1; i <= 5; i++) {
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
    );
    gamesApi = [...gamesApi, ...response.data.results];
  }

  let response = gamesApi.map((g) => {
    let games = {
      Name: g.name,
      Id: g.id,
      Description: g.description,
      Image: g.background_image,
      Released: g.released,
      Rating: g.rating,
      Platform: g.platforms.map((p) => p.platform.name),
    };
    return games;
  });

  // --------------- GET A LA DB ----------------- \\

  let gamesDb = await Videogame.findAll();

  gamesDb = gamesDb.map((g) => {
    let games = {
      Name: g.name,
      Id: g.id,
      Description: g.description,
      Image: g.background_image,
      Released: g.released,
      Rating: g.rating,
      Platform: g.platform,
    };
    return games;
  });

  let allGames = [...response, ...gamesDb];

  if (!name) return allGames;

  if (name) {
    let filterGames = allGames.filter((g) =>
      g.Name.toLowerCase().includes(name.toLowerCase())
    );
    if (!filterGames.length) {
      throw new Error("No se ha podido localizar el juego ingresado.");
    }
    return filterGames;
  }
};

// -------------- POST A LA DB ---------------- \\

const newGame = async (
  name,
  description,
  image,
  released,
  rating,
  platform
) => {
  if (!name || !platform || !description) {
    throw new Error("Faltan datos para crear el juego.");
  }
  const addGame = await Videogame.create({
    name,
    description,
    released,
    image,
    rating,
    platform,
  });
  return addGame;
};

// -------- GET A LA DB Y API POR iD --------- \\

const getGame = async (id) => {
  if (id.length > 8) {
    const game = await Videogame.findOne({ where: { id: id } });
    return game;
  } else {
    let response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    let game = {
      Name: response.data.name,
      Id: response.data.id,
      Description: response.data.description,
      Image: response.data.background_image,
      Released: response.data.released,
      Rating: response.data.rating,
      Platform: response.data.platforms.map((p) => p.platform.name),
    };
    return game;
  }
};

module.exports = {
  getGames,
  newGame,
  getGame,
};
