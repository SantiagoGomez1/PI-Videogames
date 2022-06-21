import React from "react";

import Style from "./pages.module.css"

export default function Pages({ prevHandler, nextHandler, page }) {
  return (
    <div className={Style.container}>
      <button className={Style.btn} onClick={() => prevHandler()}>Prev</button>
      <div className={Style.containerButton}>
      <h2>{page}</h2>
      </div>
      <button className={Style.btn} onClick={() => nextHandler()}>Next</button>
    </div>
  );
}
