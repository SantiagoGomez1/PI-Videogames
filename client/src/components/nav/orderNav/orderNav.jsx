import React from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import {
  filterGamesCreated,
  filterGenres,
  sortRating,
  sortVideogame,
} from "../../../redux/actions/index.js";

import Style from "./orderNav.module.css";

export default function OrderNav({ isRefresh }) {
  // isFilter,
  const dispatch = useDispatch();

  const handleFilterByGenre = (e) => {
    dispatch(filterGenres(e.target.value));
    // isFilter();
  };

  const handleFilterCreate = (e) => {
    dispatch(filterGamesCreated(e.target.value));
    // isFilter();
  };

  const handleSortVideogame = (e) => {
    dispatch(sortVideogame(e.target.value));
    isRefresh(e.target.value);
  };

  const handleSortRating = (e) => {
    dispatch(sortRating(e.target.value));
    isRefresh(e.target.value);
  };

  return (
    <header className={Style.headerC}>
      <nav className={Style.container}>
        <div>
          <Link to={"/home"}>
            <button className={Style.btn}>Home</button>
          </Link>
        </div>
        <div>
          <Link to={"/create"}>
            <button className={Style.btn}>AddGame</button>
          </Link>
        </div>
        <div className={Style.selectorContainer}>
          <p> Order by: </p>
             <h5>Genres</h5>
          <div>
            <select onChange={(e) => handleFilterByGenre(e)}>
              <option value="All">All Games</option>
              <option value="Action">Action</option>
              <option value="Indie">Indie</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
              <option value="Strategy">Strategy</option>
              <option value="Shooter">Shooter</option>
              <option value="Casual">Casual</option>
              <option value="Simulation">Simulation</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Arcade">Arcade</option>
              <option value="Platformer">Platformer</option>
              <option value="Racing">Racing</option>
              <option value="Massively Multiplayer">
                Massively Multiplayer
              </option>
              <option value="Sports">Sports</option>
              <option value="Fighting">Fighting</option>
              <option value="Family">Family</option>
              <option value="Board Games">Board Games</option>
              <option value="Educational">Educational</option>
              <option value="Card">Card</option>
            </select>
            {/* <SelectGenres onChange={(e) => handleFilterByGenre(e.target.value)}/> */}
          </div>
          <h5>Created</h5>
          <div>
            <select onChange={(e) => handleFilterCreate(e)}>
              <option value="All">All Games</option>
              <option value="Created">Created</option>
              <option value="Api">From Api</option>
            </select>
          </div>
          <h5>A-Z --- Z-A</h5>
          <div>
            <select onChange={(e) => handleSortVideogame(e)}>
              <option value="ASC">Ascendent</option>
              <option value="DESC">Descendent</option>
            </select>
          </div>
          <h5>Rating</h5>
          <div>
            <select onChange={(e) => handleSortRating(e)}>
              <option value="High">High Rate</option>
              <option value="Low">Low Rate</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}
