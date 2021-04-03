import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//module imports
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import BrowsePage from "./Pages/BrowsePage";
import LikedSongsPage from "./Pages/LikedSongsPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          {/* <Route path="/" component={HomePage} />
          <Route path="/browse" component={BrowsePage} />
          <Route path="/liked-songs" component={LikedSongsPage} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
