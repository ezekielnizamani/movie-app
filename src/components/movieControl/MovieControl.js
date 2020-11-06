import React, { useContext } from "react";
import { GlobalConetext } from "../../context/GlobalConetext";

const MovieControl = ({movie,type}) => {
    const {
      addMovieToWatchList,
      addMovieToWatched,
      moveToWatchList,
      removeFromWatchList,
      watchList,
    } = useContext(GlobalConetext);
 const storedMovie = watchList.find(o => o.id === movie.id)
const watchListDisabled = storedMovie ? true : false;

  return (
    <div>
      {type === "add" && (
        <>
          <button
            className="btn"
            onClick={() => addMovieToWatchList(movie)}
            disabled={watchListDisabled}
          >
            Add to watch list
          </button>
        </>
      )}
      {type === "watchList" && (
        <>
          <button className="btn" onClick={() => addMovieToWatched(movie)}>
            Add to watched
          </button>
          <button className="btn" onClick={() => removeFromWatchList(movie)}>
            Remove
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="btn" onClick={() => moveToWatchList(movie)}>
            Move to WatchList
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControl;
