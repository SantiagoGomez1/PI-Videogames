import React from "react";
import Style from "./searchBar.module.css";
import { getByName } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(
      e.target.value
    );
  };

  const getGames = () => {
    if (input.length !== 0) {
      dispatch(getByName(input));
      setInput("");
    } else {
      alert("Debes ingresar un juego");
    }
  };

  return (
    <div className={Style.container}>
      <input
        className={Style.Input}
        placeholder="Search a game"
        name="text"
        value={input}
        onChange={(e) => handleChange(e)}
      ></input>
      <button className={Style.btn} onClick={() => getGames(input)}>
        Search
      </button>
    </div>
  );
}
