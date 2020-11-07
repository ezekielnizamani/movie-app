import React,{useState} from "react";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'

import { FaWindowClose } from "react-icons/fa";
import "./Navbar-style.scss";
function Navbar() {
  const [open, setOpen] = useState(false)
 
  return (
    <div className="navbar">
      <Link className="a logo" to="/">
        My Movies
      </Link>

      <ul className={`${open && "open"}`}>
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
        <i className="icon" onClick={() => setOpen(!open)}>
          {open !== true ? <FaBars /> : <FaWindowClose />}
        </i>
      </ul>
    </div>
  );
}

export default Navbar;
