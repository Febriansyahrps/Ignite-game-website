const initState = {
  detail: { platforms: [] },
  screen: [],
  isLoading: true,
};

const gameDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    default: {
      return { ...state };
    }
  }
};

export default gameDetailReducer;
