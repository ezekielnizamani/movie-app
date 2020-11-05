import React, { useContext } from "react";
import "./Search-style.scss";
import { GlobalConetext } from "../../context/GlobalConetext";
function Search() {
  const { handleChange } = useContext(GlobalConetext);

  return (
    <div className="serach">
      <label htmlFor="serach">Serach Movie: </label>
      <input type="serach" onChange={handleChange} name="search" />
    </div>
  );
}

export default Search;
