import React from "react";
import Style from "./landingPage.module.css";
import { Link } from 'react-router-dom'

export default function landingPage() {
  return (
    <div className={Style.container}>
      {/* <div className={Style.back}>
      <img src={image} alt="Loading..." />
        </div> */}
      <h1 className={Style.title}>Umbrella</h1>
     <Link to={"/home"}><button className={Style.btn}>Entrar</button></Link>
    </div>
  );
}
