import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { setIsHoverLogo } from "../../store/masculinidad";
import { devices } from "../global/valores";

const LogoContainer = styled.div`
  z-index: ${(props) => (props.isHoverLogo ? 2 : 9)};
  position: absolute;
  width: 100%;
  height: 120%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  @media ${devices.mobileS} {
    right: -11px;
  }

  @media ${devices.mobileL} {
    top: -48px;
    right: -88px;
  }

  @media ${devices.tablet} {
    top: 20px;
    right: 0px;
  }

  @media ${devices.laptop} {
  }
`;

const Title = styled.div`
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  font-family: ${(props) => props.theme.fontBoldItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: ${(props) => props.theme.styleBoldItalic};
  color: ${(props) => props.theme.secundario};
  /* font-size: 17.5vh; */
  font-size: 120px;
  width: 100%;
  top: -30px;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: row;

  @media ${devices.mobileS} {
    font-size: 40px;
    right: 0px;
  }

  @media ${devices.mobileL} {
    font-size: 58px;
    top: -55px;
  }

  @media ${devices.tablet} {
    font-size: 78px;
  }

  @media ${devices.laptop} {
    font-size: 115px;
    top: -30px;
  }
`;

const TitleRecursos = styled.div`
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  font-family: ${(props) => props.theme.fontBoldItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: ${(props) => props.theme.styleBoldItalic};
  font-size: 16px;
  height: 25px;
  top: 96px;
  width: 50px;
  transform: rotate(-80deg);

  @media ${devices.mobileS} {
    top: 30px;
    font-size: 7px;
    width: 20px;
    height: 10px;
  }

  @media ${devices.mobileL} {
    top: 45px;
    font-size: 9px;
    width: 30px;
    height: 10px;
  }

  @media ${devices.tablet} {
    font-size: 10px;
    top: 60px;
    width: 35px;
  }

  @media ${devices.laptop} {
    font-size: 15px;
    top: 104px;
    width: 35px;
  }
`;

const Circulo = styled.div`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.479);
  z-index: 30;
  position: relative;
  background-color: ${(props) => props.theme.primario};
  height: 30px;
  width: 30px;
  top: -20px;
  right: -340px;
  border-radius: 60%;
  border: 8px solid ${(props) => props.theme.secundario};

  @media ${devices.mobileS} {
    border: 4px solid ${(props) => props.theme.secundario};
    height: 20px;
    width: 20px;
    left: 180px;
    top: -30px;
  }

  @media ${devices.mobileL} {
    height: 25px;
    width: 25px;
    top: -50px;
    left: 195px;
    border: 5px solid ${(props) => props.theme.secundario};
  }

  @media ${devices.tablet} {
    height: 25px;
    width: 25px;
    top: -70px;
    left: 275px;
    border: 6px solid ${(props) => props.theme.secundario};
  }

  @media ${devices.laptop} {
    top: -30px;
    left: 365px;
    height: 40px;
    width: 40px;
    border: 8px solid ${(props) => props.theme.secundario};
  }
`;

const Circulo2 = styled(Circulo)`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.479);

  top: 230px;
  left: -360px;
  @media ${devices.mobileS} {
    left: -185px;
    top: 90px;
  }

  @media ${devices.mobileL} {
    left: -150px;
    top: 90px;
  }

  @media ${devices.tablet} {
    left: -270px;
    top: 150px;
  }

  @media ${devices.laptop} {
    left: -360px;
    top: 225px;
  }

`;

const Line = styled.div`
  position: absolute;
  border: 13px solid ${(props) => props.theme.secundario};
  height: 200px;
  width: 800px;
  border-radius: 80%;
  transform: rotate(-21deg);
  -webkit-mask-image: url("/images/mask.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 1000px 600px;
  -webkit-mask-position: -300px -45px;

  @media ${devices.mobileS} {
    border: 5px solid ${(props) => props.theme.secundario};
    height: 70px;
    transform: rotate(-20deg);
    width: 400px;
    -webkit-mask-size: 800px 520px;
    -webkit-mask-position: -280px -85px;
  }

  @media ${devices.mobileL} {
    -webkit-mask-position: -280px -75px;
    border: 8px solid ${(props) => props.theme.secundario};
    height: 75px;
    width: 430px;
    top: 110px;
  }

  @media ${devices.tablet} {
    top: 90px;
    -webkit-mask-size: 1000px 600px;
    -webkit-mask-position: -300px -65px;
    transform: rotate(-21deg);
    height: 100px;
    width: 600px;
    left: initial;
    border: 10px solid ${(props) => props.theme.secundario};
  }

  @media ${devices.laptop} {
    -webkit-mask-size: 1000px 600px;
  -webkit-mask-position: -300px -45px;
  transform: rotate(-21deg);
  height: 200px;
  width: 800px;
  left: initial;
  border: 13px solid ${(props) => props.theme.secundario};
  }

`;

const Line2 = styled(Line)`

  @media ${devices.mobileS} {
    -webkit-mask-position: 120px -290px;
  }

  @media ${devices.mobileL} {
    -webkit-mask-position: 110px -295px;
  }

  @media ${devices.tablet} {
    -webkit-mask-position: 110px -350px;
  }

  @media ${devices.laptop} {
    -webkit-mask-position: 120px -348px;
  }
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
        MASCUL<TitleRecursos>RECURSOS</TitleRecursos>NIDAD
      </Title>
    </LogoContainer>
  );
};
