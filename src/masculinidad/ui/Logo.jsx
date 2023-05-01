import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { setIsHoverLogo } from "../../store/masculinidad";
import { useEffect } from "react";

const LogoContainer = styled.div`
  z-index: ${(props) => (props.isHoverLogo ? 2 : 9)};
  position: relative;
  top: 4vh;
  height: 65vh;
  width: 100%;
  backdrop-filter: blur(2px);
`;
const Title = styled.div`
  ${(props) => css`
    font-family: ${props.theme.fontBoldItalic};
    font-weight: ${props.theme.weightBoldItalic};
    font-style: ${props.theme.styleBoldItalic};
    color: ${props.theme.secundario};
  `}
  font-size: 17.5vh;
  display: flex;
  position: relative;
`;
const TitleRecursos = styled.i`
  position: relative;
  font-style: normal;
  font-size: 2.4vh;
  transform: rotate(-80deg);
  height: 3vh;
  top: 15.5vh;
  width: 6vh;
`;

const Circulo = styled.div`
  left: 90vh;
  top: -2vh;
  z-index: 30;
  position: relative;
  background-color: ${(props) => props.theme.primario};
  height: 7vh;
  width: 7vh;
  border-radius: 60%;
  border: 1vh solid ${(props) => props.theme.secundario};
`;

const Circulo2 = styled(Circulo)`
  left: 40vh;
  top: 40vh;
`;

const Line = styled.div`
  position: absolute;
  top: 6vh;
  right: 18vh;
  border: 2vh solid ${(props) => props.theme.secundario};
  height: 40vh;
  width: 100vh;
  border-radius: 60%;
  transform: rotate(-20deg);
  -webkit-mask-image: url("../public/assets/mask.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 117vh 98vh;
  -webkit-mask-position: 23vh -50vh;
  z-index: 20;
`;

const Line2 = styled(Line)`
  -webkit-mask-position: -20vh 1vh;
`;

export const Logo = () => {
  const dispatch = useDispatch();
  const { isHoverLogo, isHoverCarousel } = useSelector(
    (state) => state.masculinidad
  );

  const onHover = () => dispatch(setIsHoverLogo(true));

  useEffect(() => {
    if (!isHoverCarousel) dispatch(setIsHoverLogo(false));
  }, [isHoverCarousel]);

  return (
    <LogoContainer
      onMouseEnter={onHover}
      isHoverLogo={isHoverLogo}
      className={`animate__animated animate__faster ${
        isHoverLogo ? "animate__fadeOut" : "animate__fadeIn"
      } `}
    >
      <Circulo />
      <Circulo2 />
      <Line />
      <Line2 />
      <Title>
        MASCUL
        <TitleRecursos>RECURSOS</TitleRecursos>
        NIDAD
      </Title>
    </LogoContainer>
  );
};
