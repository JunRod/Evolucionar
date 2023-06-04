import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import { devices } from "./valores";

export const Toltip = styled(Tooltip)`
  letter-spacing: normal;
  z-index: 10;
  position: ${(props) => (props.item === "three" ? "sticky" : "absolute")};
  transition: all 0.5s ease;
  height: 120px;
  font-size: 3vh;
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  text-align: center;
  background-color: ${(props) => props.theme.secundario};
  color: ${(props) => props.theme.primario};
  padding: ${(props) => props.item === "navbar" && "2vh 2vh 25vh 2vh"};
  .example-diff-arrow {
    color: #fff;
    background-color: rgb(55, 55, 55);
  }

  .example-arrow {
    background-color: ${(props) => props.theme.secundario};
  }

`;

export const ContainerTwitter = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => props.theme.primario};

  :hover:after {
    display: flex !important;
  }

  :after {
    display: none;
    position: relative;
    content: "¡Sígueme!";
    padding: 10px;
  }

  img {
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
    color: red;
    filter: invert(100%)contrast(300%);

  }

  @media ${devices.mobileS} {
    height: 30px;
  }
  @media ${devices.tablet} {
    height: 7vh;
  }
`;