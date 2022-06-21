import React from "react";

import { useSelector } from "react-redux";
import { useState } from "react";

import Style from "./Cards.module.css";

// import Error404 from "../404/notFound";
import Pages from "../home/pages/pages.jsx";
import Card from "../gameCard/Card.jsx";

export default function Cards({ isRefresh }) {
  const games = useSelector((state) => state.games);
  // filter, isFilter,
  const [currentPage, setCurrentPage] = useState(1);

  const [pages, setPages] = useState({
    prev: 0,
    next: 15,
  });

  const indexPage = Math.ceil(games.length / 15);

  const nextHandler = () => {
    if (games.length <= pages.next) return;
    setPages({ prev: pages.prev + 15, next: pages.next + 15 });
    setCurrentPage(currentPage + 1);
  };

  const prevHandler = () => {
    if (pages.prev === 0) return;
    setPages({ prev: pages.prev - 15, next: pages.next - 15 });
    setCurrentPage(currentPage - 1);
  };

  let gamesPage;
  gamesPage = games?.slice(pages.prev, pages.next);

  // if (filter) {
    if (pages.next / indexPage > 15 && games[0]) {
      setPages({ prev: 0, next: 15 });
      setCurrentPage(1);
      isRefresh("ok");
    }
    // isFilter("ok");
  // }

  return (
    <div className={Style.containerData}>
      <ul className={Style.container}>
        {gamesPage?.map((g) => (
          <li key={g.Id}>
            <Card img={g.Image} name={g.Name} genres={g.Genres} id={g.Id} />
          </li>
        ))}
      </ul>
      <div className={Style.pagesComponent}>
        <Pages
          page={currentPage}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
        />
      </div>
    </div>
  );
}
