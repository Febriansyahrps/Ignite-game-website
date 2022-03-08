import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { gameDetailData } from "../actions/gamesDetailActions";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popUp } from "../animation";

const Game = ({ name, image, released, id }) => {
  const dispatch = useDispatch();
  const idString = id.toString();

  const getGameDetailHandler = (id) => {
    document.body.style.overflow = "hidden";
    dispatch(gameDetailData(id));
  };
  return (
    <GameStyled
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={idString}
      onClick={() => getGameDetailHandler(id)}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${idString}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${idString}`}
          src={smallImage(image, 420)}
          alt={name}
        />
      </Link>
    </GameStyled>
  );
};

const GameStyled = styled(motion.div)`
  min-height: 250px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  h3 {
    padding: 1rem 0;
  }
  p {
    padding-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
  @media screen and (max-width: 780px) {
    min-height: 200px;
    img {
      height: 150px;
    }
  }
`;

export default Game;
