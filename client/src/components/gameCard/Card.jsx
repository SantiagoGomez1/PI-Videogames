import React from "react";

import { Link } from "react-router-dom";

import Style from "./Card.module.css";

export default function Card({ img, name, genres, id }) {
  return (
    <div className={Style.container}>
      <div className={Style.image}>
        <Link to={`/home/${id}`}><img src={img} alt={img}/></Link>
      </div>
      <div className={Style.name}>
        <p>{name}</p>
      </div>
      <div className={Style.genres}>
        <h5>{genres.join(", ")}</h5>
      </div>
    </div>
  );
}
// .join(",")
