import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>All data obtained from </p>
      <a href="https://rawg.io/" target="_blank" rel="noreferrer">
        <h3> R A W G </h3>
      </a>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  p {
    color: #424242;
    font-size: 16px;
  }
  a {
    margin-left: 4px;
    text-decoration: none;
    h3 {
      color: #000;
    }
  }
`;

export default Footer;
