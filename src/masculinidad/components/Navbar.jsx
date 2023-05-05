import { useSelector } from "react-redux";
import { GeneratorsNav } from "./GeneratorsNav";
import styled from "styled-components";
import { ToolTipJsx } from "./ToolTipJsx";
import { Tooltip } from "react-tooltip";
import { devices, sizes } from "../global/valores.js";
import { slide as Menu } from "react-burger-menu";
import { styles } from "../global/menuStyles.js";
import { useEffect, useState } from "react";

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
  font-size: 2.1vh;
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

    /* Cuando sea mobileS y displaySearch esta activo entonces el contenedo genedor Nav
        se pondra en modo columna
    */
    flex-wrap: wrap !important;
  }

  @media ${devices.tablet} {
    padding: 1vh 3vh;
    width: 99%;
  }

  @media ${devices.laptop} {
    flex-direction: row !important;
  }

  @media ${devices.laptop} {
    font-size: 16px;
  }
`;

const ContainerSections = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.secundario};
  letter-spacing: 2.1px;
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
    padding: 8px 8px;
  }

  a:hover::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.secundario} 20%,
      transparent 100%
    );
    top: 30px;
    left: 10px;
    border-radius: 20px;
    animation: barrita 0.2s ease-in-out;
    animation-fill-mode: forwards;

    @media ${devices.mobileS} {
      top: 35px;
      left: 20px;
    }

    @media ${devices.laptop} {
      top: 28px;
      left: 2px;
    }
  }

  @keyframes barrita {
    0% {
      height: 0px;
      width: 0%;
    }
    100% {
      height: 4px;
      width: 80px;
    }
  }

  a.on::before {
    border-radius: 7px;
    position: absolute;
    top: -2px;
    left: 0px;
    content: "";
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.secundario};
    mix-blend-mode: difference;
  }

  @media ${devices.mobileS} {
    display: none !important;
    order: 1;
  }

  @media ${devices.laptop} {
    font-size: 12px;
    order: initial;
    display: ${(props) => (props.displaySearch ? "none" : "flex")} !important;
  }
`;

const ContainerSectionsMenu = styled(ContainerSections)`
  .bm-burger-button {
    height: 12px !important;
    width: 15px !important;
  }

  @media ${devices.mobileS} {
    display: flex !important;
  }

  @media ${devices.laptop} {
    display: none !important;
  }

  a:nth-last-child(2) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

const SectionTwo = styled.div`
  z-index: 20;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 3vh;
  margin: 0;

  @media ${devices.mobileS} {
    gap: 10px;
  }

  @media ${devices.laptop} {
    gap: 10px;
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
    display: none !important;
  }

  @media ${devices.tablet} {
    display: flex !important;
  }

  @media ${devices.laptop} {
    font-size: 12px;
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
    width: 30px;
    height: 30px;
  }

  @media ${devices.laptop} {
    width: 38px;
    height: 38px;
  }

`;

const DisplaySmall = styled.div`
  @media ${devices.mobileS || devices.mobileM || devices.mobileL} {
    width: 100%;
    margin-top: ${(props) => (props.displaySearch ? "20px" : "0")};
    z-index: 2;
    div {
      display: ${(props) => (props.displaySearch ? "flex" : "none")} !important;
      gap: 10px;

      a {
        font-size: 20px;
      }

      div {
        width: 100%;
      }
    }
  }

  @media ${devices.laptop} {
    display: none !important;
  }
`;

export const Navbar = () => {
  const [SectionsLeft, SectionsRight, Logo, Buscador] = GeneratorsNav();
  const { displaySearch } = useSelector((state) => state.masculinidad);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth < parseInt(sizes.laptop));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Nav>
      <Logo />
      {!isVisible ?
          <Buscador/>
       : null}

      <ContainerSections displaySearch={displaySearch}>
        <SectionsLeft />
        <SectionsRight />
      </ContainerSections>

      <SectionTwo>
        <ToolTipJsx id={"tooltip"} item={"navbar"} />
        <Name id="tooltip" data-tooltip-delay-hide={10000}>
          Usuario
        </Name>
        <Photo id="tooltip" data-tooltip-delay-hide={10000} />

        <ContainerSectionsMenu>
          <Menu width={200} right styles={styles}>
            {SectionsLeft()}
            {SectionsRight()}
          </Menu>
        </ContainerSectionsMenu>
      </SectionTwo>
      {isVisible ? 
        (<DisplaySmall displaySearch={displaySearch}>
          <Buscador />
        </DisplaySmall>)
      : null}
    </Nav>
  );
};
