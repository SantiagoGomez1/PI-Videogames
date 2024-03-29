import React from "react";

import { getGames, getGenres } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderNav from "../nav/orderNav/orderNav.jsx";

import Loading from "../loading/loading.jsx";
import Style from "./home.module.css";
import Cards from "../gameCards/Cards.jsx";
import Nav from "../nav/nav.jsx";

export default function Home() {
  const dispatch = useDispatch();

  const [reload, setReload] = useState("");

  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenres());
  }, [dispatch]);

  const isRefresh = (flag) => {
    setReload(flag);
    return reload;
  };

  return (
    <>
      <Nav />
      <div className={Style.container}>
        <div className={Style.nav}>
          <OrderNav isRefresh={isRefresh} />
        </div>
        {!games[0] ? (
          <Loading />
        ) : (
          <div className={Style.cardContainer}>
            <Cards isRefresh={isRefresh} />
          </div>
        )}
      </div>
    </>
  );
}
