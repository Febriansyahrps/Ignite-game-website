import axios from "axios";
import {
  gamesSearchURL,
  newestGamesURL,
  popularGamesURL,
  upcomingGamesURL,
} from "../api";

export const gamesData = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newestData = await axios.get(newestGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newest: newestData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const searchedGames = (game) => async (dispatch) => {
  const searchedGames = await axios.get(gamesSearchURL(game));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedGames.data.results,
    },
  });
};
