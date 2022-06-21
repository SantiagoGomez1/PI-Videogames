require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../../db.js");

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
      Genres: g.genres.map((g) => g.name),
      Platforms: g.platforms.map((p) => p.platform.name),
    };
    return games;
  });

  // --------------- GET A LA DB ----------------- \\

  let gamesDb = await Videogame.findAll({
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  gamesDb = gamesDb.map((g) => {
    let games = {
      Name: g.name,
      Id: g.id,
      Description: g.description,
      Image: g.image,
      Released: g.released,
      Rating: g.rating,
      Genres: g.Genres.map((g) => g.name),
      Platforms: g.platforms,
    };
    return games;
  });

  let allGames = [...gamesDb, ...response];

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
  platforms,
  genres
) => {
  if (!name || !platforms || !description) {
    throw new Error("Faltan datos para crear el juego.");
  }
  const addGame = await Videogame.create({
    name,
    description,
    image,
    released,
    rating,
    platforms,
    genres,
  });

  const genre = await Genre.findAll({
    where: { name: genres },
  });

  addGame.addGenre(genre);

  return addGame;
};

// -------- GET A LA DB Y API POR iD --------- \\

const getGame = async (id) => {
  if (id.length > 8) {
    let gameDb = await Videogame.findAll({
      where: {
        id: id,
      },
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    let game = gameDb.find((g) => g.id === id);
    gameFixed = {
      id: game.dataValues.id,
      name: game.dataValues.name,
      description: game.dataValues.description,
      image: game.dataValues.image,
      released: game.dataValues.released,
      rating: game.dataValues.rating,
      genres: game.dataValues.Genres.map((g) => g.dataValues.name),
      platforms: game.dataValues.platforms,
    };
    return gameFixed;
  } else {
    let response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    let game = {
      name: response.data.name,
      id: response.data.id,
      description: response.data.description,
      image: response.data.background_image,
      released: response.data.released,
      rating: response.data.rating,
      genres: response.data.genres.map((g) => g.name),
      platforms: response.data.platforms.map((p) => p.platform.name),
    };
    return game;
  }
};

module.exports = {
  getGames,
  newGame,
  getGame,
};
