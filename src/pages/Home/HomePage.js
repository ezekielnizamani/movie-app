import React from "react";
import Search from "../../components/Search/Search";
import MoviesList from "../../components/moviesList/MoviesList";

function HomePage() {
  return (
    <div className="home">
      <Search />
      <MoviesList />
    </div>
  );
}

export default HomePage;
