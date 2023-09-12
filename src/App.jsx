import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./screens/home/Home";
import Keno from "./screens/keno/Keno";
import Pick from "./screens/pick3/Pick";
import Match4 from "./screens/match4/Match4";
import Hit from "./screens/hit5/Hit";
import HowToPlay from "./screens/howToPlay/HowToPlay";
import Header from "./components/header/Header";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/pick3" component={Pick} />
        <Route path="/match4" component={Match4} />
        <Route path="/hit5" component={Hit} />
        <Route path="/keno" component={Keno} />
        <Route path="/howToPlay" component={HowToPlay} />
      </div>
    </Router>
  );
}

export default App;
