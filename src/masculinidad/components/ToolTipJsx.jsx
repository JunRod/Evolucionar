import { Tooltip } from "react-tooltip"
import { Link } from "react-router-dom";
import Twitter from "/images/Twitter.svg";
import Linkedin from "/images/Linkedin.svg";
import styled from "styled-components";

const Toltip = styled(Tooltip)`
  letter-spacing: normal;
  z-index: 10;
  position: ${props => props.item === "three" ? "sticky" : "absolute"};
  margin-bottom: 20vh;
  transition: all 0.5s ease;
  height: 100%;
  font-size: 3vh;
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  text-align: center;
  background-color: ${(props) => props.theme.secundario};
  color: ${(props) => props.theme.primario};
  padding: ${props => props.item === "navbar" && "2vh 2vh 25vh 2vh"};
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
    content: "Sígueme!";
    height: 1vh;
    width: 100%;
  }

  img {
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
    color: red;
  }
`;

const ContainerLinkedin = styled(ContainerTwitter)`
  :after {
    content: "Conectemos!";
  }
`;

export const ToolTipJsx = ({id, item}) => {
    return (
        <Toltip
            item={item}
            anchorSelect={`#${id}`}
            clickable
            className="example-diff-arrow"
            classNameArrow="example-arrow"
        >
            <p>Muy pronto!</p>
            <ContainerTwitter to={"https://twitter.com/JuNRod_"} target="_blank">
                <img src={Twitter} alt="Twitter" />
            </ContainerTwitter>
            <ContainerLinkedin
                link={"linkedin"}
                to={"https://www.linkedin.com/in/junrod/"}
                target="_blank"
            >
                <img src={Linkedin} alt="Twitter" />
            </ContainerLinkedin>
        </Toltip>
    )
}
