import React, { useContext } from "react";
import "./Search-style.scss";
import { MoviesContext } from "../../context/MoviesConetext";
function Search() {
  const { handleChange } = useContext(MoviesContext);

  return (
    <div className="serach">
      <label htmlFor="serach">Serach Movie: </label>
      <input type="serach" onChange={handleChange} name="search" />
    </div>
  );
}

export default Search;
