import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage, platformIcon, GetStarRating } from "../util";
import backImage from "../img/back.svg";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  const backNavigateHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      navigate("/");
      document.body.style.overflow = "auto";
    }
  };
  const backButtonHandler = () => {
    navigate("/");
    document.body.style.overflow = "auto";
  };
  const { detail, screen, isLoading } = useSelector((state) => state.game);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={backNavigateHandler}>
          <Detail layoutId={pathId}>
            <BackButton onClick={() => backButtonHandler()}>
              <img src={backImage} alt="go back" />
            </BackButton>
            <Stats>
              <Rating>
                <motion.h2 layoutId={`title ${pathId}`}>
                  {detail.name}
                </motion.h2>
                <p>Rating: {detail.rating}</p>
                {GetStarRating(detail.rating)}
              </Rating>
              <Info>
                <h3>platforms</h3>
                <Platforms>
                  {detail.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={platformIcon(data.platform.name)}
                      alt={data.platform.name}
                      title={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(detail.background_image, 1280)}
                alt={detail.background_image}
              />
            </Media>
            <Description>
              <p>{detail.description_raw}</p>
            </Description>
            <ScreenShot>
              {screen.map((data) => (
                <img
                  key={data.id}
                  src={smallImage(data.image, 640)}
                  alt={data.image}
                />
              ))}
            </ScreenShot>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  h2,
  h3 {
    padding: 0.5rem 0;
  }
  img {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    left: 0;
    border-radius: 0;
    padding: 2rem 1rem;
  }
`;
const BackButton = styled(motion.button)`
  position: absolute;
  top: 50px;
  width: 20px;
  text-decoration: none;
  border: none;
  background: transparent;
  cursor: pointer;
  img {
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    width: 15px;
    top: 45px;
  }
`;
const Stats = styled(motion.div)`
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1060px) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    padding: 0 2rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 2rem;
  }
`;
const Rating = styled(motion.div)`
  img {
    width: 1rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
  @media screen and (max-width: 700px) {
    padding-top: 1rem;
    text-align: left;
  }
`;
const Platforms = styled(motion.div)`
  width: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    width: 1.5rem;
    margin: 0.5rem;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: flex-start;
    img {
      margin-top: 0.25rem;
    }
  }
`;
const Description = styled(motion.div)`
  padding: 2rem 5rem;
  @media screen and (max-width: 1060px) {
    padding: 2rem 3rem;
  }
  @media screen and (max-width: 700px) {
    padding: 1rem 2rem;
  }
`;
const Media = styled(motion.div)`
  padding: 2rem 5rem;
  @media screen and (max-width: 1060px) {
    padding: 2rem 3rem;
  }
  @media screen and (max-width: 700px) {
    padding: 1rem 2rem;
  }
`;
const ScreenShot = styled(motion.div)`
  padding: 2rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  @media screen and (max-width: 1060px) {
    padding: 2rem 3rem;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  }
`;
export default GameDetail;
