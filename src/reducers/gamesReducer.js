const initState = {
  popular: [],
  newest: [],
  upcoming: [],
  searched: [],
  loading: true,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newest: action.payload.newest,
        upcoming: action.payload.upcoming,
        loading: false,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "DELETE_SEARCHED":
      return { ...state, searched: [] };
    case "LOADING_GAME":
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};

export default gamesReducer;
