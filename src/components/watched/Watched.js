import React,{useContext} from "react";
import CardList from "../cardList/CardList";

import { GlobalConetext } from "../../context/GlobalConetext";
function Watched() {
    const { watched } = useContext(GlobalConetext);
  return (
    <div>
      <h1 style={{marginLeft:"1em",marginTop:"1em"}}>Watched</h1>
      <CardList movies={watched} type="watched"/>
    </div>
  );
}

export default Watched;
