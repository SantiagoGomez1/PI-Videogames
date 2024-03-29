import React from "react";

import { Link } from "react-router-dom"

import SearchBar from "../searchBar/searchBar.jsx";
import Style from './nav.module.css'
import logo from '../../Images/logo.png'

export default function Nav() {
  return (
    <div className={Style.container}>
      <header className={Style.headerC}>
        <Link to={"/"}><img className={Style.logo} src={logo} alt="" /> </Link>
        <nav>
          <SearchBar />
        </nav>
      </header>
    </div>
  );
}
