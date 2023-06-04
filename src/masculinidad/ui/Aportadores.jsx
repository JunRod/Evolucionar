import styled from "styled-components"
import { devices } from "../../styles/valores"
import { SocialRedes } from "./SocialRedes"

const Title = styled.h3`
    font-family: ${props => props.theme.fontBoldItalic};
    font-weight: ${props => props.theme.weightBoldItalic};
    font-style: ${props => props.theme.styleBoldItalic};
    font-size: 4vh;
    color: ${props => props.theme.secundario};
    margin: 0;
    letter-spacing: 2vh;
    text-align: center;

   @media ${devices.mobileS} {
    font-size: 20px;
    text-align: center;
    word-wrap: break-word;
    letter-spacing: 1.7vh;
  }
  
  @media ${devices.tablet} {
    font-size: 4vh;
    width: initial;
    letter-spacing: 2vh;
  }

  @media ${devices.laptop} {
    font-size: 4vh;
    width: initial;
    letter-spacing: 2vh;
  }

  @media ${devices.laptopL} {
    font-size: 4vh;
    width: initial;
    letter-spacing: 2vh;
  }
`

const PositionsFlex = styled.div`
    margin-bottom: ${props => props.flag ? "80px" : "0px"};

    position: relative;
    display: flex;
    flex-direction: row;
    gap: 6vh;
    font-family: ${props => props.theme.fontMediumItalic};
    font-weight: ${props => props.theme.weightMediumItalic};
    font-style: ${props => props.theme.styleMediumItalic};
    align-items: center;

    @media ${devices.mobileS} {
    flex-direction: column;
    gap: 0px;
  }
  
  @media ${devices.tablet} {
    flex-direction: row;
    gap: 6vh;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    gap: 6vh;
  }

  @media ${devices.laptopL} {
    flex-direction: row;
    gap: 6vh;
  }


`

const PositionOne = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${devices.mobileS} {
        order: 1;
        margin-top: 0;
  }
  
  @media ${devices.tablet} {
    order: 0;
  }

  @media ${devices.laptop} {
    margin-top: 3vh;
  }

  @media ${devices.laptopL} {
    margin-top: 3vh;
  }


`

const MarcadorOne = styled.i`
    z-index: 10;
    position: relative;
    font-size: 3.5vh;
    color: ${props => props.theme.secundario};
    font-family: ${props => props.theme.fontRegular};
    font-weight: ${props => props.theme.weightRegular};
    font-style: ${props => props.theme.styleRegular};
    background-color: ${props => props.theme.primario};
    border-radius: 2vh;
    padding: 1.5vh 2.5vh;
    top: 35px;
    left: 60px;
`

const ContainerImgOne = styled.div`
    position: relative;
    height: 35vh;
    width: 25vh;
`

const ImageOne = styled.img`
    height: 100%;
    border-radius: 2vh;
    width: 100%;
`

const DescripcionOne = styled.div`
    margin-top: 1.2vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.8vh;
    color: ${props => props.theme.secundario};
    font-family: ${props => props.theme.fontMediumItalic};
    font-weight: ${props => props.theme.weightMediumItalic};
    font-style: ${props => props.theme.styleMediumItalic};
`

const NameOne = styled.div`
    font-size: 2.7vh;
    letter-spacing: 1.2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props =>  {
            if(props.active) return props.theme.secundario
        }};
    color: ${props =>  {
            if(props.active) return props.theme.primario
        }};
    border-radius: 1vh;
    width: 180px;
    line-height: 20px;
    padding: 8px 0px;
    font-weight:  ${props =>  {
            if(props.active) return props => props.theme.weightBoldItalic
        }};
    margin-top: ${props =>  {
            if(props.active) return "10px"
        }};
    /* &::after {
        position: absolute;
        content: "";
        mix-blend-mode: difference;
    } */
`

const AportacionesOne = styled.div`
    font-size: 2.5vh;
    font-family: ${props => props.theme.fontRegular};
    font-weight: ${props => props.theme.weightRegular};
    font-style: ${props => props.theme.styleRegular};
`

const MarcadorTwo = styled.i`
    z-index: 10;
    position: relative;
    font-size: 4vh;
    color: ${props => props.theme.secundario};
    font-family: ${props => props.theme.fontRegular};
    font-weight: ${props => props.theme.weightRegular};
    font-style: ${props => props.theme.styleRegular};
    background-color: ${props => props.theme.primario};
    border-radius: 2vh;
    padding: 2vh 3vh;
    top: 35px;
    left: 70px;
    
`

const ContainerImagenTwo = styled.div`
    position: relative;
    height: 40vh;
    width: 30vh;
`

const ImagenTwo = styled.img`
    height: 100%;
    border-radius: 2vh;
    width: 100%;
    object-fit: cover;
    position: absolute;
`

const PositionThree = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${devices.mobileS} {
        margin-top: 0;

        order: 2;
  }
  
  @media ${devices.tablet} {
    order: 0;
    margin-top: 3vh;

  }

  @media ${devices.laptop} {
    margin-top: 3vh;

  }

  @media ${devices.laptopL} {
    margin-top: 3vh;

  }
  
`

const MarcadorThree = styled.i`
    z-index: 10;
    position: relative;
    font-size: 3vh;
    color: ${props => props.theme.secundario};
    font-family: ${props => props.theme.fontRegular};
    font-weight: ${props => props.theme.weightRegular};
    font-style: ${props => props.theme.styleRegular};
    background-color: ${props => props.theme.primario};
    border-radius: 2vh;
    padding: 1.5vh 2.5vh;
    top: 35px;
    left: 60px;
`

const ContainerImgThree = styled.div`
    position: relative;
    height: 28vh;
    width: 20vh;
`

const ImageThree = styled.img`
    height: 100%;
    border-radius: 2vh;
    width: 100%;
`

const ContainerMarcadorOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Aportadores = ({flag}) => {
    return (
        <>
            <Title>{flag ? "PATROCINADORES" : "TOP APORTADORES"}</Title>
            <PositionsFlex flag={flag}>
                <PositionOne >
                    <MarcadorOne>2 °</MarcadorOne>
                    <ContainerImgOne >
                        <ImageOne
                            src={flag ? "/images/brandon.png" : "/images/photo2.png" }
                            alt="photo2.jpg"
                        />
                    </ContainerImgOne>
                    <DescripcionOne >
                        <NameOne>
                            {flag ? "Brandon Rojas" : "Steve Jobs"}
                        </NameOne>

                        {
                            flag ? <></>: 
                            <AportacionesOne>
                            7 Aportaciones
                        </AportacionesOne>
                        }
                        
                    </DescripcionOne>
                </PositionOne>

                <ContainerMarcadorOne>
                    <MarcadorTwo>
                        1 °
                    </MarcadorTwo>
                    <ContainerImagenTwo>
                        <ImagenTwo
                            className="image_one"
                            src={flag ? "/images/compa.svg" : "/images/photo1.png" }
                            alt="photo1.jpg"
                        />
                    </ContainerImagenTwo>
                    <DescripcionOne>
                        <NameOne
                             active={true}
                        >
                            {flag ? "Fernando Peralta León" : "JuNRod"}
                        </NameOne>
                        {
                            flag ? < SocialRedes social={true} /> : <AportacionesOne>
                            7 Aportaciones
                        </AportacionesOne> }
                    </DescripcionOne>
                </ContainerMarcadorOne>
                
                <PositionThree>
                    <MarcadorThree>3 °</MarcadorThree>
                    <ContainerImgThree>
                        <ImageThree 
                        src={flag ? "/images/yokze.png" : "/images/photo3.jpg" }
                         />
                    </ContainerImgThree>

                    <DescripcionOne>
                        <NameOne >
                            {flag ? "Ángel Rodriguez" : "Rosweell"}
                        </NameOne>
                        {
                            flag ? <></> : <AportacionesOne>
                            4 Aportaciones
                        </AportacionesOne>
                        }
                    </DescripcionOne>
                </PositionThree>
            </PositionsFlex>
        </>
    )
}
