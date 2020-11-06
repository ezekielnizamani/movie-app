import React, { useContext } from "react";
import CardList from "../cardList/CardList";
import { GlobalConetext } from "../../context/GlobalConetext";
function WatchList() {
  const { watchList } = useContext(GlobalConetext);
 
  return (
    <div className="watch-list">
      <h1 style={{ marginLeft: "1em", marginTop: "1em" }}>Watch List</h1>
      <CardList movies={watchList} type="watchList" />
    </div>
  );
}

export default WatchList;
