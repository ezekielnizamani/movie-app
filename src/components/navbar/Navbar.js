import React from "react";
import { Link } from "react-router-dom";
import "./Navbar-style.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link className="a" to="/">
          My Movies
        </Link>
      </div>
      <ul>
        <li>
          <Link className="a" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="a" to="/watched">
            Watched
          </Link>
        </li>

        <li>
          <Link className="a" to="/watchList">
            Watch list
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
