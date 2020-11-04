import React, { useContext, useEffect, useState } from "react";

import { MoviesContext } from "../../context/MoviesConetext";
import "./MoviesList-style.scss";
function MoviesList() {
  const [searchdMovies, setSearchdMovies] = useState([]);
  const { movies } = useContext(MoviesContext);
  console.log(movies);
  useEffect(() => {
    if (movies !== undefined) {
      setSearchdMovies([
        movies.length
          ? movies.map((movie, index) => (
              <div className="movies-list" key={movie.id.toString()}>
                <img
                  className="image"
                  alt={`${movie.title} poster`}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <div className="title">{movie.title}</div>
              </div>
            ))
          : " ",
      ]);
    } else {
      setSearchdMovies([]);
    }
  }, [movies]);

  return <div className="movies">{searchdMovies.map((movie) => movie)}</div>;
}

export default MoviesList;
