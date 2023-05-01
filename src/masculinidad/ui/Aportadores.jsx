import styled from "styled-components"

const Title = styled.h3`
    font-family: ${props => props.theme.fontBoldItalic};
    font-weight: ${props => props.theme.weightBoldItalic};
    font-style: ${props => props.theme.styleBoldItalic};
    font-size: 4vh;
    color: ${props => props.theme.secundario};
    margin: 0;
    letter-spacing: 2vh;
`

const PositionsFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6vh;
    font-family: ${props => props.theme.fontMediumItalic};
    font-weight: ${props => props.theme.weightMediumItalic};
    font-style: ${props => props.theme.styleMediumItalic};
`

const PositionOne = styled.div`
    margin-top: 3vh;
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
    top: 5vh;
    left: 17vh;
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
    &::after {
        position: absolute;
        content: "";
        padding: 2vh 10vh;
        background-color: ${props =>  {
            if(props.active) return props.theme.secundario
        }};
        mix-blend-mode: difference;
        border-radius: 1vh;
    }
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
    top: 5vh;
    left: 22vh;
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
`

const PositionThree = styled.div`
    margin-top: 7vh;
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
    top: 4.2vh;
    left: 13vh;
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


export const Aportadores = () => {
    return (
        <>
            <Title>TOP APORTADORES</Title>

            <PositionsFlex>
                <PositionOne >
                    <MarcadorOne>2 °</MarcadorOne>
                    <ContainerImgOne >
                        <ImageOne
                            src="../../../public/img/photo2.jpg" 
                            alt="photo2.jpg"
                        />
                    </ContainerImgOne>
                    <DescripcionOne >
                        <NameOne>
                            Steve Jobs
                        </NameOne>
                        <AportacionesOne>
                            7 Aportaciones
                        </AportacionesOne>
                    </DescripcionOne>
                </PositionOne>

                <div>
                    <MarcadorTwo>
                        1 °
                    </MarcadorTwo>
                    <ContainerImagenTwo>
                        <ImagenTwo
                            className="image_one"
                            src="../../../public/img/photo1.jpg" alt="photo1.jpg"
                        />
                    </ContainerImagenTwo>
                    <DescripcionOne>
                        <NameOne
                             active={true}
                        >
                            JuNRod
                        </NameOne>
                        <AportacionesOne>
                            7 Aportaciones
                        </AportacionesOne>
                    </DescripcionOne>
                </div>

                <PositionThree>
                    <MarcadorThree>3 °</MarcadorThree>
                    <ContainerImgThree>
                        <ImageThree 
                        src="../../../public/img/photo3.jpg" alt="photo1.jpg"
                         />
                    </ContainerImgThree>

                    <DescripcionOne>
                        <NameOne >
                            Bill Gates
                        </NameOne>
                        <AportacionesOne>
                            4 Aportaciones
                        </AportacionesOne>
                    </DescripcionOne>
                </PositionThree>
            </PositionsFlex>
        </>
    )
}
