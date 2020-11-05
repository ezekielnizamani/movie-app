const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHlIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    default:
      return state;
  }
};
export default AppReducer;
