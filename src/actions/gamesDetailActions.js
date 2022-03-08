import axios from "axios";
import { gameDetailURL, gameScreenShotURL } from "../api";

export const gameDetailData = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const gameData = await axios.get(gameDetailURL(id));
  const ssData = await axios.get(gameScreenShotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: gameData.data,
      screen: ssData.data.results,
    },
  });
};
