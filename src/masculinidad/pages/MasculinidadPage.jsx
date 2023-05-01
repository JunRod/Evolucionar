import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "react-tooltip/dist/react-tooltip.css";
import { LibrosCarrusel, Aportar} from "../components";
import { Logo, Aportadores, AvatarAlfa, Credits, Frase, Logo2 } from "../ui";
import { ToolTipJsx } from "../components/ToolTipJsx";



const WindowOne = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.theme.primario};
`;
const FraseLogoContainer = styled.div`
  align-items: center;
  left: -25vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  order: 2;
  position: relative;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vh 0 0 0;
`;

const AportarContainer = styled.div`
  align-items: center;
  margin-top: 13vh;
  display: flex;
  flex-direction: column;
  gap: 15vh;
  width: 170vh;
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
          <LibrosCarrusel />
          <Frase />
          <Logo />
        </FraseLogoContainer>
        <AvatarAlfa />
      </WindowOne>

      <WindowTwo>
        <Logo2 />
      </WindowTwo>

      <WindowThree id="my-tooltip" data-tooltip-delay-hide={10000}>

        <ToolTipJsx id={"my-tooltip"} item={"three"}/>
        
        <Aportadores />

        <AportarContainer id="seccion-aportar">
          <Aportar />
        </AportarContainer>

        <Credits />
      </WindowThree>
    </>
  );
};
