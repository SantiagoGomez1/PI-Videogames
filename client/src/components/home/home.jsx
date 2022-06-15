import React from "react";

import { getGames, getGenres } from "../../redux/actions/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import OrderNav from "../nav/orderNav/orderNav.jsx";
import Style from "./home.module.css";
import Cards from "../gameCards/Cards.jsx";
import Nav from "../nav/nav.jsx"

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <>
      <Nav />
    <div className={Style.container}>
      <div className={Style.nav}>
        <OrderNav />
      </div>
      <div>
        <Cards />
      </div>
    </div>
    </>
  );
}
