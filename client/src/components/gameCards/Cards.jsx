import React from "react";
import Style from "./Cards.module.css";
import Card from "../gameCard/Card.jsx";
import Pages from "../home/pages/pages.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Cards() {
  const games = useSelector((state) => state.games);

  const [pages, setPages] = useState({
    prev: 0,
    next: 15,
  });

  const nextHandler = () => {
    if (games.length <= pages.next) return;
    setPages({ prev: pages.prev + 15, next: pages.next + 15 });
  };

  const prevHandler = () => {
    if (pages.prev === 0) return;
    setPages({ prev: pages.prev - 15, next: pages.next - 15 });
  };

  let gamesPage
     (gamesPage = games?.slice(pages.prev, pages.next));
  return (
    <div>
      {/* <Pages nextHandler={nextHandler} prevHandler={prevHandler} /> */}
      <ul className={Style.container}>
        {gamesPage?.map((g) => (
          <li key={g.Id}>
            <Card img={g.Image} name={g.Name} genres={g.Genres} id={g.Id} />
          </li>
        ))}
      </ul>
      <Pages nextHandler={nextHandler} prevHandler={prevHandler} />
    </div>
  );
}
