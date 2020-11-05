import React, { useState, useEffect, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
export const GlobalConetext = createContext();

const GlobalConetextProvider = ({ children }) => {
  const [movies, setMovies] = useState({});

  const [serach, setSerach] = useState("");
  const initialState = {
    watchList: [],
    watched: [],
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=05da570c81e1d19508559c663d8cb88e&language=en-US&query=${serach}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, [serach]);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHlIST", payload: movie });
  };
  const handleChange = (e) => {
    setSerach(e.target.value.trim());
  };

  return (
    <GlobalConetext.Provider
      value={{
        movies,
        handleChange,
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
      }}
    >
      {children}
    </GlobalConetext.Provider>
  );
};

export default GlobalConetextProvider;
