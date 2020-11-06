import React, { useContext } from "react";
import "./Add-style.scss";
import CardList from "../cardList/CardList";
import { GlobalConetext } from "../../context/GlobalConetext";
function Add() {
  const { movies, handleChange } = useContext(GlobalConetext);
  return (
    <div className="add">
      <div className="serach">
        <label htmlFor="serach">Serach Movie: </label>
        <input type="serach" onChange={handleChange} name="search" />
      </div>
      <CardList movies={movies} type="add"/>
    </div>
  );
}

export default Add;
