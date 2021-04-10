import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainApp from "./Main/MainApp.js";
import Banner from "./Main/Banner.js";
import Home from "./Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/bangladesh" exact component={MainApp} />
          <Route path="/banner" exact component={Banner} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
