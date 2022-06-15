import React from "react";

import { Route, Switch } from "react-router-dom";

import landingPage from "./components/landingPage/landingPage.jsx";
import GameDetail from "./components/gameDetail/gameDetail.jsx";
import Form from "./components/createGame/createGame.jsx";
import Home from "./components/home/home.jsx";

function App() {
  return (
    <>
    <div className="App">
      <Switch>
      <Route exact path={"/home/:id"} component={GameDetail}/>
      <Route exact path={"/create"} component={Form} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/"} component={landingPage} />
      </Switch>
    </div>
    </>
  );
}

export default App;
