import styled from "styled-components"

const LineTwo = styled.div`
    border: 0.7vh solid ${props => props.theme.primario};
    width: 15vh;
    height: 40vh;
    border-radius: 60%;
    transform: rotate(60deg);
`

const TaperLineTwo = styled.div`
    position: relative;
    background-color: ${props => props.theme.secundario};
    height: 5vh;
    width: 40vh;
    top: -23.5vh;
`

const TitleLogo = styled.div`
    z-index: 12;
    position: absolute;
    top: 39vh;
    color:  ${props => props.theme.primario};
    letter-spacing: 2vh;
    font-size: 2.7vh;
    font-family: ${props => props.theme.fontBlackItalic};
    font-weight: ${props => props.theme.weightBlackItalic};
    font-style: ${props => props.theme.styleBlackItalic};
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
`

const Circle2 = styled.div`
    z-index: 10;
    top: 34vh;
    right: 12vh;
    position: relative;
    background-color: ${props => props.theme.primario};
    border: .5vh solid ${props => props.theme.secundario};
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
