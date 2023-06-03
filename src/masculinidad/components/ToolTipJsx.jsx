import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import Twitter from "/images/twitter.svg";
import styled from "styled-components";
import { devices } from "../global/valores";

const Toltip = styled(Tooltip)`
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

const ContainerTwitter = styled(Link)`
  position: relative;
  height: 7vh;
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
    padding: 1vh;
    position: relative;
    content: "Sígueme;)";
    height: 1vh;

    @media ${devices.mobileS} {
      padding: 0px;
    }
    @media ${devices.tablet} {
      padding: 1vh;
    }
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


export const ToolTipJsx = ({ id, item }) => {
  return (
    <Toltip
      item={item}
      anchorSelect={`#${id}`}
      clickable
      className="example-diff-arrow"
      classNameArrow="example-arrow"
    >
      <p>Muy pronto</p>
      <ContainerTwitter to={"https://twitter.com/JuNRod_"} target="_blank">
        <img src={Twitter} alt="Twitter" />
      </ContainerTwitter>
    </Toltip>
  );
};
