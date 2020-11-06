import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Add from "./components/add/Add";
import watchList from "./components/watchList/WatchList";
import watched from "./components/watched/Watched";
import GlobalConetextProvider from "./context/GlobalConetext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalConetextProvider>
        <Switch>
          <Route exact path="/" component={Add} />
          <Route path="/watched" component={watched} />
          <Route path="/watchlist" component={watchList} />
        </Switch>
      </GlobalConetextProvider>
    </div>
  );
}

export default App;
