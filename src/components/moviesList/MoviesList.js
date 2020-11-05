import React, { useContext, useEffect, useState } from "react";

import { GlobalConetext } from "../../context/GlobalConetext";

import "./MoviesList-style.scss";
function MoviesList() {
  const [movieList, setMovieList] = useState([]);
  const { movies, addMovieToWatchList } = useContext(GlobalConetext);

  useEffect(() => {
    if (movies !== undefined) {
      setMovieList([
        movies.length
          ? movies.map((movie) => (
              <div className="movies-list" key={movie.id.toString()}>
                <img
                  className="image"
                  alt={`${movie.title} poster`}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <div className="title">
                  {movie.title}
                  <div className="button">
                    <button onClick={() => addMovieToWatchList(movie)}>
                      Add to Watch list
                    </button>
                  </div>
                </div>
              </div>
            ))
          : " ",
      ]);
    } else {
      setMovieList([]);
    }
  }, [movies]);

  return <div className="movies">{movieList.map((movie) => movie)}</div>;
}

export default MoviesList;
