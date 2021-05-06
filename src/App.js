import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//module imports
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import BrowsePage from "./Pages/BrowsePage";
import LikedSongsPage from "./Pages/LikedSongsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sidebar">
          <NavBar />
        </div>
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/browse" component={BrowsePage} />
            <Route path="/liked-songs" component={LikedSongsPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
