import React, { useContext } from "react";
import { GlobalConetext } from "../../context/GlobalConetext";
import "./WatchList-style.scss";
function WatchList() {
  const { watchList } = useContext(GlobalConetext);

  return (
    <div className="watch">
      {watchList.length > 0 ? (
        watchList.map((movie) => {
          return (
            <div className="watch-list" key={movie.id.toString()}>
              <img
                className="image"
                alt={`${movie.title} poster`}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <div className="title">{movie.title}</div>
            </div>
          );
        })
      ) : (
        <h2>empty please add movies to watch</h2>
      )}
    </div>
  );
}

export default WatchList;
