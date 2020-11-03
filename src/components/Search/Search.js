import React from "react";
import "./Search-style.scss";
function Search() {
  return (
    <div className="serach">
      <label htmlFor="serach">Serach Movie: </label>
      <input type="serach" name="search" />
    </div>
  );
}

export default Search;
