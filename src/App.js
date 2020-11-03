import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import WatchedPage from "./pages/Watched/WatchedPage";
import WatchListPage from "./pages/WatchList/WatchListPage";
import HomePage from "./pages/Home/HomePage.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/watched" component={WatchedPage} />
        <Route path="/watchlist" component={WatchListPage} />
      </Switch>
    </div>
  );
}

export default App;
