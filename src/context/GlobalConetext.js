import React, { createContext, useState, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
export const GlobalConetext = createContext();

const GlobalConetextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState({});

 const initialState = {
   watchList: localStorage.getItem("watchList")
     ? JSON.parse(localStorage.getItem("watchList"))
     : [],
   watched: localStorage.getItem("watched")
     ? JSON.parse(localStorage.getItem("watched"))
     : [],
 };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=05da570c81e1d19508559c663d8cb88e&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, [query]);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));

    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const handleChange = (e) => {
    setQuery(e.target.value.trim());
  };

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHlIST", payload: movie });
  };
  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };
  const moveToWatchList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };
  const removeFromWatchList = (movie) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie });
  };
  return (
    <GlobalConetext.Provider
      value={{
        movies: movies,
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
        addMovieToWatched,
        moveToWatchList,
        handleChange,
        removeFromWatchList,
      }}
    >
      {children}
    </GlobalConetext.Provider>
  );
};

export default GlobalConetextProvider;
