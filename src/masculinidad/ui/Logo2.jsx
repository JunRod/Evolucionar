import styled from "styled-components"
import { devices } from "../global/valores"

const LineTwo = styled.div`
    border: 0.7vh solid ${props => props.theme.primario};
    width: 15vh;
    height: 40vh;
    border-radius: 60%;
    transform: rotate(60deg);

    
 /* @media ${devices.mobileS} {
    position: relative;
    transform: rotate(-30deg);
    width: 120px;
    height: 40px;
    right: -55px;
  } */
  
  @media ${devices.tablet} {
    position: initial;
    right: initial;
    width: 15vh;
    height: 40vh;
    transform: rotate(60deg);
  }
`

const TaperLineTwo = styled.div`
    position: relative;
    background-color: ${props => props.theme.secundario};
    height: 5vh;
    width: 40vh;
    top: -23.5vh;

    /* @media ${devices.mobileS} {
        top: -33px;
        height: 30px;
  } */
  
  @media ${devices.tablet} {
    height: 5vh;
    top: -23.5vh;
  }


`

const TitleLogo = styled.div`
    z-index: 12;
    position: absolute;
    top: 39.5vh;
    color:  ${props => props.theme.primario};
    letter-spacing: 2vh;
    text-align: center;
    font-size: 2.7vh;
    font-family: ${props => props.theme.fontBlackItalic};
    font-weight: ${props => props.theme.weightBlackItalic};
    font-style: ${props => props.theme.styleBlackItalic};

 @media ${devices.mobileS} {
        font-size: 12px;
        letter-spacing: 3px;
        top: 40vh;
        right: 8px;
  }
  
  @media ${devices.tablet} {
    font-size: 20px;
    width: initial;
    letter-spacing: 7px;
    top: 39.5vh;
    right: initial;
  }

  @media ${devices.laptop} {
    font-size: 2.7vh;
    letter-spacing: 2vh;
    top: 39.5vh;
  }

  @media ${devices.laptopL} {
    font-size: 2.7vh;
    letter-spacing: 2vh;
    top: 39.5vh;
  }
`

const Circle = styled.div`
    z-index: 10;
    top: 16vh;
    left: 12vh;
    position: relative;
    background-color: ${props => props.theme.primario};
    border: .5vh solid ${props => props.theme.secundario};
    border-radius: 50%;
    height: 5vh;
    width: 5vh;

    /* @media ${devices.mobileS} {
        height: 20px;
        width: 20px;
        top: 35px;
  } */
  
  @media ${devices.tablet} {
    height: 5vh;
    width: 5vh;
    top: 16vh;
  }


`

const Circle2 = styled.div`
    z-index: 10;
    top: 34vh;
    right: 12vh;
    position: relative;
    border: .5vh solid ${props => props.theme.secundario};
    background-color: ${props => props.theme.primario};
    border-radius: 50%;
    height: 5vh;
    width: 5vh;
`

export const Logo2 = () => {
    return (
        <>  
            <Circle/>
            <Circle2/>
            <LineTwo/>
            <TitleLogo>RECURSOS PARA LA EXELENCIA MASCULINA</TitleLogo>
            <TaperLineTwo/>
        </>

    )
}
