import React from "react";
import Style from "./pages.module.css"

export default function Pages({ prevHandler, nextHandler }) {
  return (
    <div className={Style.container}>
      <button className={Style.btn} onClick={() => prevHandler()}>Prev</button>
      <button className={Style.btn} onClick={() => nextHandler()}>Next</button>
    </div>
  );
}
