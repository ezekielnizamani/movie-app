import React from "react";
import "./Card.scss";
function Card({ movie }) {
  return (
    <div className="card">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}
`}
          width="100%"
          alt={movie.title}
        />
        <div className="name">{movie.title}</div>
      </div>
    </div>
  );
}

export default Card;
