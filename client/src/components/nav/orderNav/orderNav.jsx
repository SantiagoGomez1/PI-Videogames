import React from "react";

import { Link } from "react-router-dom";

import Style from "./orderNav.module.css";

export default function OrderNav() {
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
        <div>
          <Link to={"/create"}>
            <button className={Style.btn}>AddGame</button>
          </Link>
        </div>
        <div>
          <Link to={"/create"}>
            <button className={Style.btn}>AddGame</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
