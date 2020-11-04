import React, { useState, useEffect, createContext } from "react";
export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState({});
  const [serach, setSerach] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=05da570c81e1d19508559c663d8cb88e&language=en-US&query=${serach}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, [serach]);
  const handleChange = (e) => {
    setSerach(e.target.value.trim());
  };

  return (
    <MoviesContext.Provider value={{ movies, handleChange }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
