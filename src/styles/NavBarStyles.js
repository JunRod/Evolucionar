import styled from "styled-components";
import { devices } from "./valores";

export const Nav = styled.nav`
  position: fixed;
  z-index: 300;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  border-radius: 1vh;
  width: 98%;
  font-size: 16px;
  padding: 6px 14px;
  margin-top: 10px;

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

    /* Cuando sea mobileS y displaySearch esta activo entonces el contenedo genedor Nav
        se pondra en modo columna
    */
    flex-wrap: wrap !important;
  }

`;

export const ContainerSections = styled.div`

  list-style: none;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.secundario};
  z-index: 20;
  justify-content: center;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  align-items: center;
  display: flex;
  flex-direction: row !important;
  gap: 10px;

  a:visited {
    color: ${(props) => props.theme.secundario};
  }

  a {
    color: ${(props) => props.theme.secundario};
    position: relative;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    padding: 5px 8px;
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
      top: 40px;
    }

    @media ${devices.laptop} {
      top: 30px;
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
      width: 60px;
    }
  }

  a.on::before {
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
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

export const ContainerSectionsMenu = styled(ContainerSections)`


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

`;

export const SectionTwo = styled.div`
  z-index: 20;
  display: flex;
  justify-content: end;
  align-items: center;

  @media ${devices.mobileS} {
    gap: 10px;
  }

  @media ${devices.laptop} {
    gap: 10px;
  }
`;

export const Name = styled.div`
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  color: ${(props) => props.theme.secundario};
  letter-spacing: 2px;
  font-size: 12px;

  @media ${devices.mobileS} {
    display: none !important;
  }

  @media ${devices.tablet} {
    display: flex !important;
  }
`;

export const Photo = styled.div`
  background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
  border-radius: 60%;

  @media ${devices.mobileS} {
    width: 25px;
    height: 25px;
  }

  @media ${devices.tablet} {
    width: 30px;
    height: 30px;
  }
`;

export const DisplaySmall = styled.div`
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
