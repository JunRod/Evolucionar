import { useSelector } from "react-redux";
import { GeneratorsNav } from "./GeneratorsNav";
import styled from "styled-components";
import { ToolTipJsx } from "./ToolTipJsx";
import { Tooltip } from "react-tooltip";
import { devices } from "../global/valores";
import { slide as Menu } from "react-burger-menu";
import {  styles } from "../global/menu.js"

const Nav = styled.div`
  position: fixed;
  z-index: 300;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 1vh 4vh;
  margin: 1vh;
  border-radius: 1vh;
  font-size: 2.3vh;
  width: 99%;

  background-image: linear-gradient(
    to left,
    ${(props) => props.theme.primario},
    #04080b61,
    ${(props) => props.theme.primario}
  );

  &::before {
    position: absolute;
    backdrop-filter: blur(30px);
    content: "";
    height: 100%;
  }

  @media ${devices.mobileS} {
    padding: 1vh 1vh;
    width: 97%;
  }

  @media ${devices.tablet} {
    padding: 1vh 3vh;
    width: 99%;



  }
`;



const ContainerSections = styled.div`
  gap: 1vh;
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.secundario};
  letter-spacing: 0.4vh;
  z-index: 20;
  justify-content: center;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  align-items: center;

  a:nth-last-child(2) {
    margin-left: 3vh;
  }

  a:visited {
    color: ${(props) => props.theme.secundario};
  }

  a {
    color: ${(props) => props.theme.secundario};
    position: relative;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    padding: 1.2vh 1.2vh;
  }

  a:hover::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.secundario} 20%,
      transparent 100%
    );
    top: 5vh;
    border-radius: 0.7vh;
    animation: barrita 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes barrita {
    0% {
      height: 10%;
      width: 0%;
    }
    100% {
      height: 10%;
      width: 90%;
    }
  }

  a.on::before {
    border-radius: 0.7vh;
    position: absolute;
    left: 0vh;
    content: "";
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.secundario};
    mix-blend-mode: difference;
  }

  @media ${devices.mobileS} {
    display: none !important;
  }

  @media ${devices.tablet} {
    display: flex !important;
  }

`;

const ContainerSectionsMenu = styled(ContainerSections)`

  .bm-burger-button {
    height: 10px !important;
    width: 15px !important;
  }

@media ${devices.mobileS} {
    display: flex !important;
  }

  @media ${devices.tablet} {
    display: none !important;
  }

`

const SectionTwo = styled.div`
  z-index: 20;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 3vh;
  margin: 0;

  
  @media ${devices.mobileS} {
    gap: 1.5vh;
  }

  @media ${devices.tablet} {
    gap: 3vh;
  }
`;

const Name = styled.div`
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  color: ${(props) => props.theme.secundario};
  font-size: 2.6vh;
  letter-spacing: 0.8vh;

  @media ${devices.mobileS} {
  font-size: 2vh;
  }

  @media ${devices.tablet} {
    font-size: 2.6vh;
  }

`;

const Photo = styled.div`
  background-image: linear-gradient(
    to bottom right,
    rgb(153, 0, 255) 20%,
    rgb(14, 66, 134) 100%
  );
  width: 6vh;
  height: 6vh;
  border-radius: 60%;

  @media ${devices.mobileS} {
    width: 25px;
  height: 25px;
  }

  @media ${devices.tablet} {
    width: 6vh;
    height: 6vh;
  }

`;

export const Navbar = () => {
  const [SectionsLeft, SectionsRight, Logo, Buscador] = GeneratorsNav();

  const { displaySearch } = useSelector((state) => state.masculinidad);

  return (
    <Nav>
      <Logo />
      <Buscador />

      <ContainerSections style={{ display: displaySearch ? "none" : "flex" }} >
        <SectionsRight />
        <SectionsLeft />
      </ContainerSections>

      <SectionTwo>
        <ToolTipJsx id={"tooltip"} item={"navbar"} />
        <Name id="tooltip" data-tooltip-delay-hide={10000}>Usuario</Name>
        <Photo id="tooltip" data-tooltip-delay-hide={10000}/>

        <ContainerSectionsMenu >
          <Menu width={200} right styles={styles}>
            {SectionsLeft()}
            {SectionsRight()}
          </Menu>
        </ContainerSectionsMenu>
  

      </SectionTwo>

    </Nav>
  );
};
