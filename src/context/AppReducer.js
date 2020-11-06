const AppReducer = (state, action) => {

  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHlIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "REMOVE_FROM_WATCHLIST":
      console.log(state);
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchList: [action.payload, ...state.watchList],
      };
    default:
      return state;
  }
     
};
export default AppReducer;
