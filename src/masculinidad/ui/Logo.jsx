import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { setIsHoverLogo } from "../../store/masculinidad";
import { devices } from "../global/valores";

const LogoContainer = styled.div`
  z-index: ${(props) => (props.isHoverLogo ? 2 : 9)};
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);

  @media ${devices.mobileM} {
  }
  
  @media ${devices.tablet} {
    width: 100%;
  }

  @media ${devices.laptop} {
    right: 0;
    width: 100%;
  }

  @media ${devices.laptopL} {
    right: 0;
    max-width: 2000px;
  }

`;

const Title = styled.div`
    font-family: ${props => props.theme.fontBoldItalic};
    font-weight: ${props => props.theme.weightBoldItalic};
    font-style: ${props => props.theme.styleBoldItalic};
    color: ${props => props.theme.secundario};
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
    right: 16px;
  }
  
  @media ${devices.tablet} {
    font-size: 58px;
    top: -25px;
  }

  @media ${devices.laptop} {
    font-size: 120px;
    top: -38px;
  }

  @media ${devices.laptopL} {
    font-size: 130px;
  }

`;

const TitleRecursos = styled.div`
  position: relative;
  font-family: ${props => props.theme.fontBoldItalic};
  font-weight: ${props => props.theme.weightBoldItalic};
  font-style: ${props => props.theme.styleBoldItalic};
  font-size: 16px;
  height: 25px;
  top: 96px;
  width: 50px;
  transform: rotate(-80deg);

  /* @media ${devices.mobileS} {
      right: -45px;
    top: 60px;
  }

  @media ${devices.tablet} {
    top: 90px;
    right: -80px;
  } */

  @media ${devices.mobileS} {
    top: 30px;
    font-size: 7px;
    width: 20px;
    height: 10px;
  }
  
  @media ${devices.tablet} {
    top: 45px;
    font-size: 9px;
    width: 30px;
    height: 10px;
  }

  @media ${devices.laptop} {
    font-size: 16px;
  height: 25px;
  top: 96px;
  width: 50px;
  }

  @media ${devices.laptopL} {
    font-size: 16px;
  height: 25px;
  top: 105px;
  width: 50px;
  }
`;

const Circulo = styled.div`
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
    left: 145px;
    top: -30px;

  }
  
  @media ${devices.tablet} {
    height: 25px;
    width: 25px;
    top: -20px;
    left: 200px;
    border: 6px solid ${(props) => props.theme.secundario};
  }

  @media ${devices.laptop} {
    top: -55px;
    left: 350px;
    height: 40px;
  width: 40px;
    border: 8px solid ${(props) => props.theme.secundario};
  }

  @media ${devices.laptopL} {
    top: -45px;
    left: 350px;
    height: 40px;
  width: 40px;
    border: 8px solid ${(props) => props.theme.secundario};
  }

`;

const Circulo2 = styled(Circulo)`
  top: 230px;
  left: -360px;
    @media ${devices.mobileS} {
      left: -170px;
    top: 85px;


  }
  
  @media ${devices.tablet} {
    left: -200px;
    top: 110px;
  }

  @media ${devices.laptop} {
    left: -350px;
    top: 235px;
  }

  @media ${devices.laptopL} {
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
    left: 310px;
    -webkit-mask-size: 800px 520px;
    -webkit-mask-position: -280px -71px;
  }
  
  @media ${devices.tablet} {
    border: 10px solid ${(props) => props.theme.secundario};
    left: initial;
    height: 90px;
    transform: rotate(-20deg);
    width: 450px;
    -webkit-mask-size: 800px 540px;
    -webkit-mask-position: -300px -75px;
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

  @media ${devices.laptopL} {
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
  -webkit-mask-position: 120px -348px;

  @media ${devices.mobileS} {
  -webkit-mask-position: 120px -297px;
    left: 260px;
  }
  
  @media ${devices.tablet} {
  -webkit-mask-position: 110px -310px;
  left: initial;
  }

  @media ${devices.laptop} {
    -webkit-mask-position: 120px -348px;
  }

  @media ${devices.laptopL} {
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
      className={`animate__animated animate__faster ${isHoverLogo ? "animate__fadeOut" : "animate__fadeIn"
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
