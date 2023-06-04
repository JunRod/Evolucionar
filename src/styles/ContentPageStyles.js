import styled, { css } from "styled-components";
import { devices } from "./valores";
import { NavLink } from "react-router-dom";

export const Contenedor = styled.div`
  background-color: ${(props) => props.theme.primario};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding: 55px 15px;
  gap: 25px;

  height: ${(props) => {
    if (props.displaySearch) {
      return props.dataFilter.length === 0 ? "100vh" : "100%";
    } else {
      return "100%";
    }
  }};
`;

export const MessageDataSliceEmpty = styled.div`
  padding: 2vh;
  color: ${(props) => props.theme.secundario};
  font-size: 2.8vh;
  text-align: center;
`;

export const Button = styled(NavLink)`
  cursor: pointer;
  width: 8vh;
  height: 5vh;
  background-color: transparent;
  border: 0.5vh solid ${(props) => props.theme.secundario};
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  background-color: ${(props) => props.theme.primario};
  font-size: 2.6vh;
  text-align: center;
  color: ${(props) => props.theme.secundario};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.secundario};
    color: ${(props) => props.theme.primario};
  }

  &.active {
    background-color: ${(props) => props.theme.secundario};
    color: ${(props) => props.theme.primario};
  }
`;

export const ContentView = styled.div`
  @media ${devices.mobileS} {
    display: flex;
    flex-direction: column;
  }

  @media ${devices.tablet} {
    height: 400px;
    flex-direction: row;
  }
`;

export const ContentViewDescription = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;
  position: relative;
  order: 0;
  color: ${(props) => props.theme.secundario};
  font-size: 2.8vh;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  gap: 5px;

  @media ${devices.mobileS} {
    width: 100%;
    margin-bottom: 15px;
  }

  @media ${devices.tablet} {
    margin-bottom: 0px;
    padding: 25px 0 0 0;
  }
`;

export const Placa = styled.i`
  border-radius: 1vh;
  padding: 1.2vh 1.8vh;
  font-size: 2.2vh;

  ${(props) =>
    props.section === "libros"
      ? css`
          background: ${props.theme[props.section]};
          color: ${props.theme.primario};
        `
      : css`
          background: ${props.theme[props.section]};
        `};
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: ${(props) => props.theme.fontBoldItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: normal;
  line-height: 32px;
`;

export const Description = styled.div`
  font-size: 2.5vh;
  text-overflow: ellipsis;
  overflow: scroll;

  @media ${devices.mobileS} {
    width: 100%;
    max-height: 200px;
  }

  @media ${devices.tablet} {
    width: 90%;
  }
`;

export const ButtonLink = styled(Placa)`
  background-image: linear-gradient(109.6deg, #33a8ec 11.2%, #186be7 91.1%);
  color: ${(props) => props.theme.secundario};
`;

export const NavLinkDeleteStyles = styled(NavLink)`
  color: none !important;
  text-decoration: none !important;
`;

export const ContainerFrontPage = styled.div`
  position: relative;
  right: 0;
  width: 100%;
  order: 2;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    box-shadow: inset 9vh -11vh 14vh 8vh ${(props) => props.theme.primario},
      inset 9vh -11vh 10vh -4vh ${(props) => props.theme.primario};

    @media ${devices.mobileS} {
      box-shadow: none;
      background: linear-gradient(
          0deg,
          ${(props) => props.theme.primario} 5%,
          transparent 60%
        )
        no-repeat;
    }

    @media ${devices.tablet} {
      box-shadow: inset 9vh -11vh 14vh 8vh ${(props) => props.theme.primario},
        inset 9vh -11vh 10vh -4vh ${(props) => props.theme.primario};
    }
  }

  @media ${devices.mobileS} {
    height: 50%;
  }

  @media ${devices.mobileL} {
    height: 60%;
    width: 60%;
  }

  @media ${devices.mobileXL} {
    height: 50%;
    width: 50%;
  }

  @media ${devices.tablet} {
    height: 100%;
    width: 100%;
  }
`;

export const Img = styled.img`
  border-radius: 1vh 1vh 0 0;
  height: 100%;
  width: 100%;
`;

export const GridBooks = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  z-index: 90;

  @media ${devices.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    display: grid;
  }

  @media ${devices.mobileXL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${devices.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const CardContainer = styled.div`
  cursor: pointer;
  width: 100%;
  color: #fff;
  text-align: center;
  position: relative;
  height: 100%;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-top: solid 1vh ${(props) => props.theme.secundario};
    border-bottom: solid 1vh ${(props) => props.theme.secundario};
    transition: 0.2s;
    transform: scaleX(0);
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-left: solid 1vh ${(props) => props.theme.secundario};
    border-right: solid 1vh ${(props) => props.theme.secundario};
    transition: 0.2s;
    transform: scaleY(0);
  }

  :hover:before,
  :hover:after {
    transform: scale(1);
  }
`;

export const Card = styled.div`
  padding: 1vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  align-items: center;
  height: 100%;

  :hover::before {
    z-index: 40;
    display: flex !important;
  }

  ::before {
    z-index: 40;
    display: none;
    content: "";
    position: absolute;
    backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
  }

  :hover::after {
    z-index: 93;
    display: flex !important;
  }

  ::after {
    z-index: 93;
    display: none;
    content: "";
    z-index: 100;
    height: 100%;
    width: 100%;
    background-image: url("/images/visible.svg");
    background-repeat: no-repeat;
    background-size: 50px 50px;
    background-position: center;
    position: absolute;
  }

  @media ${devices.mobileS} {
    flex-direction: row;
  }

  @media ${devices.mobileXL} {
    flex-direction: column;
  }
`;

export const CardImagen = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`;

export const CardImg = styled.img`
  position: absolute;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export const CardTitle = styled.div`
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  text-align: center;
  font-size: 3vh;
  line-height: 25px;
  color: ${(props) => props.theme.secundario};
  letter-spacing: 0.1vh;
`;

export const CardDescription = styled.div`
  font-size: 2.3vh;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  color: ${(props) => props.theme.secundario};
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContenedorPlacas = styled.div`
  max-height: 120px;
  padding-bottom: 8px;
  color: white !important;
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  ${(props) => {
    if (props.descripcion)
      return css`
        display: flex;
      `;
  }}
`;

export const VerMas = styled.div`
  font-size: 2.3vh;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  color: ${(props) => props.theme.secundario};
  padding: 0vh 2vh 1vh 2vh;
`;

export const Pagination = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const FlexColumnInPhone = styled.div`
  width: 100%;

  @media ${devices.mobileS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${devices.tablet} {
    gap: 5px;
  }
`;

export const Authors = styled.div`
  font-size: 2.5vh;

  @media ${devices.mobileS} {
    width: 100%;
    height: auto;
  }
`;

export const ScrollTop = styled.div`
  height: 0px;
  width: 0px;
`;
