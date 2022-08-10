import React from "react";
import axios from "axios";

import { useState } from "react";
import { useSelector } from "react-redux";

import NavLink from "../nav/navLink/navLink.jsx";
import Select from "../select/select.jsx";
import Style from "./createGame.module.css";
import Nav from "../nav/nav.jsx";

export default function Form() {
  const genres = useSelector((state) => state.genres);

  const games = useSelector((state) => state.games);

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

  const [errors, setErrors] = useState("");
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const exist = games.every(
    (r) => r.Name.toUpperCase() !== input.name.toUpperCase()
  );

  const [maxGenres, setMaxGenres] = useState(false);
  const [maxPlatforms, setMaxPlatforms] = useState(false);

  const selectPlatforms = (e) => {
    if (input.platforms.length > 5) {
      setMaxPlatforms(true);
      setTimeout(() => {
        setMaxPlatforms(false);
      }, 2000);
      return;
    }
    if (e.target.value === "Select") return;
    setInput({
      ...input,
      platforms: [...new Set([...input.platforms, e.target.value])],
    });
  };

  const selectGenres = (e) => {
    if (input.genres.length > 4) {
      setMaxGenres(true);
      setTimeout(() => {
        setMaxGenres(false);
      }, 2000);
      return;
    }
    if (e.target.value === "Select") return;
    setInput({
      ...input,
      genres: [...new Set([...input.genres, e.target.value])],
    });
  };

  const deleteGenres = (value) => {
    setInput({
      ...input,
      genres: input.genres.filter((g) => g !== value),
    });
  };

  const deletePlatforms = (value) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((g) => g !== value),
    });
  };

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
    } else if (input.description.length >= 200) {
      setErrors("You are exceeding the characters in the description");
    } else if (!input.released.trim()) {
      setErrors("Released date required");
    } else if (!input.rating) {
      setErrors("Rating must be between 1 and 5");
    } else if (!input.platforms.length) {
      setErrors("Select at least one platform");
    } else if (!input.genres.length) {
      setErrors("Select at least one genre");
    } else if (!exist) {
      setErrors("The name of the game already exists");
    } else {
      try {
        await axios.post("https://umbrella-games.herokuapp.com/videogames", input);
        setInput({
          name: "",
          description: "",
          image: "",
          released: "",
          rating: 0,
          platforms: [],
          genres: [],
        });
        alert("Juego creado correctamente!.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Nav />
      <div className={Style.container}>
        <NavLink />
        <form
          className={Style.containerForm}
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1>Add game</h1>
          <br />
          <div className={Style.containerData}>
            <div>
              <h2>Name* </h2>
              <br />

              <input
                className={Style.inputName}
                name="name"
                placeholder="Game name"
                value={input.name}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div>
              <h2>Released* </h2>
              <br />

              <input
                className={Style.inputReleased}
                type="date"
                name="released"
                value={input.released}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div>
              <h2>Description* </h2>
              <br />

              <input
                className={Style.inputDescription}
                name="description"
                placeholder="Game description"
                value={input.description}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div>
              <h2>Image </h2>
              <br />
              <input
                className={Style.inputImage}
                type="url"
                name="image"
                value={input.image}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          </div>
          <div className={Style.containerSelects}>
            <div className={Style.rating}>
              <h2>Rating* </h2>
              <br />
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
                <h2>Platforms* </h2>
                <br />
                <Select
                  list={Platforms}
                  id={Platforms.id}
                  name="platforms"
                  onChange={(e) => selectPlatforms(e)}
                />
                <div className={Style.listPlatforms}>
                  {input.platforms?.map((p) => (
                    <span key={p}>
                      {" "}
                      <button
                        value={p}
                        onClick={(p) => deletePlatforms(p.target.value)}
                      >
                        X
                      </button>
                      {p}
                    </span>
                  ))}
                  {maxPlatforms ? <p>Platforms exceeded</p> : null}
                </div>
              </div>

              <div>
                <h2>Genres* </h2>
                <br />
                <Select
                  list={genres}
                  id={genres.id}
                  name="genres"
                  onChange={(e) => selectGenres(e)}
                />
                <div className={Style.listGenres}>
                  {input.genres?.map((g) => (
                    <span key={g}>
                      <button
                        value={g}
                        onClick={(g) => deleteGenres(g.target.value)}
                      >
                        X
                      </button>
                      {g}
                    </span>
                  ))}
                  {maxGenres ? <p>Genres exceeded</p> : null}
                </div>
              </div>
            </div>
          </div>
          <div className={Style.containerButton}>
            <div className={Style.error}>
              {errors ? <span>{errors}</span> : null}
            </div>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}
