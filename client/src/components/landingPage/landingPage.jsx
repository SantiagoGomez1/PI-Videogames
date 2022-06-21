import React from "react";

import { Link } from "react-router-dom";

import Style from "./landingPage.module.css";
import logo from "../../Images/logo.png";

export default function landingPage() {
  return (
    <div className={Style.container}>
      <div className={Style.back}>
        <Link to={"/home"}><img src={logo} alt="Loading..." /></Link>
      </div>
    </div>
  );
}
