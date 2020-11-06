import React from "react";
import Card from "../card/Card";
import "./CardList.scss";
import MovieControl from "../movieControl/MovieControl";
function CardList({ movies, type }) {

  return (
    <ul className="card-list">
      {movies !== undefined ? (
        movies.length ? (
          movies.map((movie) => (
            <li key={movie.id.toString()}>
              <Card movie={movie} />
              <MovieControl movie={movie} type={type} />
            </li>
          ))
        ) : (
        <h1>No movies</h1>
        )
      ) : (
        <h1>Serach for movie</h1>
      )}
    </ul>
  );
}

export default CardList;
