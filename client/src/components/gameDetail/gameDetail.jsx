import React from "react";
import Style from "./gameDetail.module.css";

import Nav from "../nav/nav.jsx";
import NavLink from "../nav/navLink/navLink.jsx";

import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getById } from "../../redux/actions";

export default function GameDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const gameDetail = useSelector((state) => state.game);

  return (
    <>
      <div className={Style.container}>
        <Nav />
        <div className={Style.toContainer}>
          <NavLink />
          <div className={Style.dataContainer}>
            <div className={Style.nameContainer}>
              <h1>{gameDetail.name}</h1>
            </div>

            <div className={Style.dataImg}>
              <div style={Style.moreData}>
                <div>
                  <h5>Release : </h5>
                  <p>{gameDetail.released}</p>
                </div>
                <br />

                <div className={Style.ratContainer}>
                  <h5>Rating : </h5>
                  <p>{gameDetail.rating}⭐​</p>
                </div>
                <br />

                <div className={Style.platContainer}>
                  <h5>Platforms : </h5>
                  {gameDetail.platforms?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <br />

                <div className={Style.genrContainer}>
                  <h5>Genres : </h5>
                  {gameDetail.genres?.map((g) => (
                    <p key={g}>{g}</p>
                  ))}
                </div>
              </div>

              <div className={Style.imgContainer}>
                <img src={gameDetail.image} alt="" />
              </div>
            </div>
            <br></br>

            <div className={Style.descContainer}>
              <h5>Description : </h5>
              <p>
                {id.length > 8
                  ? gameDetail.description
                  : gameDetail.description?.replace(/<[^>]*>?/g, "")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
