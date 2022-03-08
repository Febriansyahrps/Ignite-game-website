import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchedGames } from "../actions/gamesActions";
import { fadeIn } from "../animation";
import logo from "../img/logo.svg";

const Nav = () => {
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();

  const getTextHandler = (e) => {
    setTextValue(e.target.value);
  };
  const getGamesSearchedHandler = (e) => {
    e.preventDefault();
    dispatch(searchedGames(textValue));
    setTextValue("");
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <Search>
        <form onSubmit={getGamesSearchedHandler}>
          <input value={textValue} onChange={getTextHandler} type="text" />
          <button>Search</button>
        </form>
      </Search>
    </StyledNav>
  );
};
const StyledNav = styled(motion.div)`
  text-align: center;
  padding: 2rem 4rem;
  @media screen and (max-width: 744px) {
    padding: 2rem 2rem;
  }
  @media screen and (max-width: 420px) {
    padding: 2rem 1rem;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
  img {
    width: 2rem;
    margin-right: 0.5rem;
  }
`;
const Search = styled(motion.div)`
  input {
    border: #ff7676 3px solid;
    padding: 0.5rem;
    border-radius: 1rem;
    width: 30%;
    font-size: 1rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    outline: none;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
  button {
    margin-left: 1rem;
    border: none;
    background: #ff7676;
    color: white;
    font-size: 1rem;
    padding: 0.75rem;
    border-radius: 1rem;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
  }
  button:hover {
    background: #ff3f3f;
    transition: 0.5s ease;
  }
  @media screen and (max-width: 1200px) {
    input {
      width: 40%;
    }
  }
  @media screen and (max-width: 780px) {
    input {
      width: 50%;
    }
    button {
      padding: 0.5rem;
    }
  }
  @media screen and (max-width: 480px) {
    input {
      width: 60%;
    }
  }
`;

export default Nav;
