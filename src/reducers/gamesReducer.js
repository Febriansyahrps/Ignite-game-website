const initState = {
  popular: [],
  newest: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newest: action.payload.newest,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "DELETE_SEARCHED":
      return { ...state, searched: [] };
    default:
      return { ...state };
  }
};

export default gamesReducer;
