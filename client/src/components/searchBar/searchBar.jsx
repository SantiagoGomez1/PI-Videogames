import React from "react";
import Style from "./searchBar.module.css";
import { getByName } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.type]: e.target.value,
    });
  };

  const getGames = () => {
    input.length !== 0
      ? dispatch(getByName(input.text))
      : alert("Debes ingresar un juego");
  };

  return (
    <div className={Style.container}>
      <input
        className={Style.Input}
        placeholder="Search a game"
        type="text"
        value={input.type}
        onChange={(e) => handleChange(e)}
      ></input>
      <button className={Style.btn} onClick={() => getGames(input)}>
        Search
      </button>
    </div>
  );
}
