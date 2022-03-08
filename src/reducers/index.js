import { combineReducers } from "redux";
import gameDetailReducer from "./gameDetailReducer";
import gamesReducer from "./gamesReducer";

const rootReducers = combineReducers({
  games: gamesReducer,
  game: gameDetailReducer,
});

export default rootReducers;
