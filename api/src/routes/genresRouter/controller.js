require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Genre } = require("../../db.js");

let getGenres = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  let genresApi = response.data.results.map((g) => {
    let genres = {
      Name: g.name,
      // Id: g.id,
      // Games : g.games.map(g => g.name)
    };
    return genres;
  });

  for (let i = 0; i < genresApi.length; i++) {
    await Genre.findOrCreate({where: { name: genresApi[i].Name }});
  }
  const genre = await Genre.findAll();
  return genre;
};

module.exports = {
  getGenres,
};
