import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gamesData } from "../actions/gamesActions";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import deleteLogo from "../img/delete.svg";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(gamesData());
  }, [dispatch]);
  const { popular, newest, upcoming, searched } = useSelector(
    (state) => state.games
  );
  const deleteSearchedHandler = () => {
    dispatch({ type: "DELETE_SEARCHED" });
  };

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <SearchedTitle>
              <img
                onClick={deleteSearchedHandler}
                src={deleteLogo}
                alt="delete"
              />
              <h1>Searched Games</h1>
            </SearchedTitle>
            <Games>
              {searched.map((game) => (
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                  id={game.id}
                  pathId={pathId}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <GamesContainer>
          <h1>Popular Games</h1>
          <Games>
            {popular.map((game) => (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
                pathId={pathId}
              />
            ))}
          </Games>
        </GamesContainer>
        <GamesContainer>
          <h1>Newest Games</h1>
          <Games>
            {newest.map((game) => (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
              />
            ))}
          </Games>
        </GamesContainer>
        <GamesContainer>
          <h1>Upcoming Games</h1>
          <Games>
            {upcoming.map((game) => (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
              />
            ))}
          </Games>
        </GamesContainer>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h1 {
    padding: 3rem 0 1rem 0;
    color: #ff7676;
  }
  @media screen and (max-width: 780px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 550px) {
    padding: 0 2rem;
  }
`;
const GamesContainer = styled(motion.div)`
  min-height: 80vh;
  @media screen and (min-height: 700px) {
    min-height: 30vh;
  }
`;
const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
const SearchedTitle = styled(motion.div)`
  padding: 3rem 0 1rem 0;
  display: flex;
  align-items: center;
  img {
    width: 2rem;
    margin-right: 1rem;
    font-size: 2rem;
    color: #ff7676;
    cursor: pointer;
  }
  h1 {
    padding: 0;
  }
`;

export default Home;
