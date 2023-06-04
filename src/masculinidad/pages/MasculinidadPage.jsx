import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import "react-tooltip/dist/react-tooltip.css";
import { LibrosCarrusel, Aportar } from "../components";
import { Logo, Aportadores, AvatarAlfa, Credits, Frase, Logo2 } from "../ui";
import { ToolTipJsx } from "../components/ToolTipJsx";
import { devices, theme } from "../../styles/valores.js";

const WindowOne = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  background-color: ${(props) => props.theme.primario};
`;

const FraseLogoContainer = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;

  @media ${devices.mobileL} {
    right: 75px;
  }

  @media ${devices.tablet} {
    right: 200px;
    width: 0px;
  }

  @media ${devices.laptop} {
    right: 180px;
    width: 0px;
    top: -30px;
  }
`;

const WindowTwo = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.secundario};
  height: 550px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const WindowThree = styled.div`
  overflow: hidden;

  position: relative;
  background-color: ${(props) => props.theme.primario};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vh 0 0 0;
`;

const AportarContainer = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 13vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15vh;
`;

const ContainerLogoCarousel = styled.div`
  position: relative;
  display: flex;
  height: 320px;

  @media ${devices.mobileS} {
    position: relative;
    top: -70px;
    width: 900px;
  }

  @media ${devices.mobileL} {
    width: 1000px;
    height: 290px;
    top: 0;
  }

  @media ${devices.laptop} {
    width: 1200px;
    height: 300px;
    right: 0;
  }

`;

export const MasculinidadPage = () => {
  const { scroll } = useSelector((state) => state.masculinidad);

  useEffect(() => {
    const variable =
      scroll === "aportar" ? "#seccion-aportar" : "#seccion-principal";

    document.querySelector(variable).scrollIntoView({ behavior: "smooth" });
  }, [scroll]);

  return (
    <>
      <WindowOne id="seccion-principal">
        <FraseLogoContainer>
          <ContainerLogoCarousel>
            <Logo />
            <LibrosCarrusel />
          </ContainerLogoCarousel>
          <Frase />
        </FraseLogoContainer>
        <AvatarAlfa />
      </WindowOne>

      <WindowTwo>
        <Logo2 />
      </WindowTwo>

      <WindowThree id="my-tooltip" data-tooltip-delay-hide={10000}>
        <ToolTipJsx id={"my-tooltip"} item={"three"} />
        <Aportadores />

        <AportarContainer id="seccion-aportar">
          <Aportar />
        </AportarContainer>

        <Credits />
      </WindowThree>
    </>
  );
};
