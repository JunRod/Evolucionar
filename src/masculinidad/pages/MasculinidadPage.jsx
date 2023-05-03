import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import "react-tooltip/dist/react-tooltip.css";
import { LibrosCarrusel, Aportar } from "../components";
import { Logo, Aportadores, AvatarAlfa, Credits, Frase, Logo2 } from "../ui";
import { ToolTipJsx } from "../components/ToolTipJsx";
import { devices, theme } from "../global/valores.js";

const WindowOne = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 660px;
  max-height: 1200px;
  justify-content: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.primario};

  @media ${devices.mobileS} {
    height: 100vh;
  }

  @media ${devices.tablet} {
    height: 50vh;
  }

  @media ${devices.laptop} {
    height: 100vh;
  }

  @media ${devices.laptopL} {
    height: 100vh;
  }
`;

const FraseLogoContainer = styled.div`
  align-items: center;
  margin-top: 35px;
  width: 580px;
  height: 100%;
  right: 160px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;

  @media ${devices.mobileS} {
    right: -12px;
    top: -60px;
  }

  @media ${devices.tablet} {
    width: 150px;
    right: 130px;
    top: 10px;
  }

  @media ${devices.laptop} {
    right: 160px;
    width: 580px;
  }

  @media ${devices.laptopL} {
    right: 160px;
    width: 580px;
  }
`;

const WindowTwo = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.secundario};
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const WindowThree = styled.div`
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
  width: 1000px;
  height: 320px;

  @media ${devices.mobileS} {
    position: relative;
    top: -70px;
  }

  @media ${devices.tablet} {
    width: 490px;
    height: 290px;
    top: 0;
  }

  @media ${devices.laptop} {
    width: 1000px;
    height: 300px;
    right: 0;
  }

  @media ${devices.laptopL} {
    width: 1000px;
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
          <Frase />

          <ContainerLogoCarousel>
            <Logo />
            <LibrosCarrusel />
          </ContainerLogoCarousel>
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
