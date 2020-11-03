import React from "react";
import { Link } from "react-router-dom";
import "./Navbar-style.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">My Movies</Link>
      </div>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/watched">
            Watched
          </Link>
        </li>

        <li>
          <Link to="/watchList">Watch list</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
