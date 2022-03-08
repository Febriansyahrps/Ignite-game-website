import { currentDate, lastYear, nextYear } from "./date";

const base_url = "https://api.rawg.io/api/";
const key_api = `key=${process.env.REACT_APP_KEY}`;
// popular game url
export const popularGamesURL = () =>
  `${base_url}games?dates=${lastYear},${currentDate}&page_size=6&${key_api}`;
// newest game url
export const newestGamesURL = () =>
  `${base_url}games?dates=${lastYear},${currentDate}&ordering=-released&page_size=6&${key_api}`;
// upcoming game url
export const upcomingGamesURL = () =>
  `${base_url}games?dates=${currentDate},${nextYear}&ordering=-added&page_size=6&${key_api}`;
// detail game url
export const gameDetailURL = (id) => `${base_url}games/${id}?${key_api}`;
// ss game url
export const gameScreenShotURL = (id) =>
  `${base_url}games/${id}/screenshots?${key_api}`;
export const gamesSearchURL = (game) =>
  `${base_url}games?search=${game}d&page_size=6&${key_api}`;
