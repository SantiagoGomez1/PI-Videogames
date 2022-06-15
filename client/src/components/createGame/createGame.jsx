import React from "react";
import axios from "axios";

import { useState } from "react";
import { useSelector } from "react-redux";

import Style from "./createGame.module.css";
import Select from "../select/select.jsx";

export default function Form() {
  let Platforms = [
    { name: "PC", id: 1 },
    { name: "PlayStation", id: 2 },
    { name: "Xbox", id: 3 },
    { name: "Nintendo Switch", id: 4 },
    { name: "iOS", id: 5 },
    { name: "Android", id: 6 },
    { name: "Nintendo", id: 7 },
    { name: "PS Vita", id: 8 },
    { name: "PSP", id: 9 },
    { name: "Wii", id: 10 },
    { name: "GameCube", id: 11 },
    { name: "Game Boy", id: 12 },
    { name: "SNES", id: 13 },
    { name: "NES", id: 14 },
    { name: "Commodore", id: 15 },
    { name: "Atari", id: 16 },
    { name: "Genesis", id: 17 },
    { name: "SEGA", id: 18 },
    { name: "Dreamcast", id: 19 },
    { name: "3DO", id: 20 },
    { name: "Jaguar", id: 21 },
    { name: "Game Gear", id: 22 },
    { name: "Neo Geo", id: 23 },
    { name: "PS5", id: 24 },
    { name: "PS4", id: 25 },
    { name: "PS3", id: 26 },
    { name: "PS2", id: 27 },
    { name: "PS1", id: 28 },
  ];

  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: 0,
    platforms: [],
    genres: [],
  });

  const genres = useSelector((state) => state.genres);

  const [errors, setErrors] = useState("");
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const selectPlatforms = (value) => {
    setInput({
      ...input,
      platforms: [...new Set([...input.platforms, value])],
    });
  };

  const selectGenres = (value) => {
    setInput({
      ...input,
      genres: [...new Set([...input.genres, value])],
    });
  };
  console.log(input.platforms);
  console.log(input.genres);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !input.name.trim() &&
      !input.description &&
      !input.released.trim() &&
      !input.rating &&
      !input.platforms.length &&
      !input.genres.length
    ) {
      setErrors("Debes completar estos campos para crear el videojuego.");
    } else if (!input.name.trim()) {
      setErrors("Name required");
    } else if (!input.description) {
      setErrors("Description required");
    } else if (!input.released.trim()) {
      setErrors("Released date required");
    } else if (!input.rating) {
      setErrors("Rating must be between 1 and 5");
    } else if (!input.platforms.length) {
      setErrors("Select at least one platform");
    } else if (!input.genres.length) {
      setErrors("Select at least one genre");
    } else {
      try {
        await axios.post("http://localhost:3001/videogames", input);
        setInput({
          name: "",
          description: "",
          image: "",
          released: "",
          rating: 0,
          platforms: [],
          genres: [],
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={Style.container}>
      <form className={Style.containerForm} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h5>Name: </h5>
          <input
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <h5>Description: </h5>
          <input
            name="description"
            value={input.description}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <h5>Released: </h5>
          <input
            type="date"
            name="released"
            value={input.released}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <h5>Image:</h5>
          <input
            type="url"
            name="image"
            value={input.image}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <h5>Rating:</h5>
          <input
            type="range"
            min="1"
            max="5"
            name="rating"
            value={input.rating}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className={Style.selector}>
          <div>
            <h5>Platforms:</h5>
            <Select
              list={Platforms}
              id={Platforms.id}
              name="platforms"
              onClick={(e) => selectPlatforms(e.target.value)}
            />
          </div>
          <div>
            <h5>Genres:</h5>
            <Select
              list={genres}
              id={genres.id}
              name="genres"
              onClick={(e) => selectGenres(e.target.value)}
            />
          </div>
        </div>
        
        <div className={Style.error}>
          {errors ? <span>{errors}</span> : null}
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
