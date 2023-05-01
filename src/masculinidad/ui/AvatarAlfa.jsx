import styled, { css } from "styled-components"
import Vector2 from "/images//VectorEyes2.svg"
import Vector3 from "/images/Circle2.svg"
import AvatarImg from "/images/Avatar.png"


const Avatar = styled.img`
    z-index: 10;
    position: relative;
    height: 102vh;
    width: 123.5vh;
    -webkit-mask-image: linear-gradient(
      to top left,
      transparent 12%,
      rgb(78, 78, 78) 35%,
      black 90%
    );
    -webkit-mask-size: 123.5vh 102vh;
`

const GradientAvatar = styled.div`
    position: absolute;
    mix-blend-mode: overlay;
    z-index: 12;
    height: 102vh;
    width: 123.5vh;
    background-image: linear-gradient(
      145deg,
      #c2d4e5,
      #394655 80%,
      transparent 95%
    );
    -webkit-mask: url(AvatarImg);
    -webkit-mask-size: 123.5vh 102vh;
`

const WordsRey = styled.div`
    ${props => css`
        color: ${props.theme.secundario};
        font-family: ${props.theme.fontMediumItalic};
        font-weight: ${props.theme.weightMediumItalic};
        font-style: ${props.theme.styleMediumItalic};
        `}
        position: absolute;
        font-size: 2.5vh;
        top: 60vh;
        left: -6vh;
        padding: 0.5vh 0.5vh 0.1vh 25vh;
        background-color: ${props => props.theme.primario};
        z-index: 16;
        letter-spacing: 1.5vh;
        

    &::before {
    position: absolute;
    content: "GUERRERO";
    top: 4vh;
    padding: inherit;
    background-color: ${props => props.theme.primario};
    left: -11vh;
    z-index: 12;
    }

    &::after {
    position: absolute;
    content: "MAGO";
    top: 11vh;
    padding: inherit;
    background-color: ${props => props.theme.primario};
    left: -13vh;
    }
`

const WordsAmante = styled.div`
    position: absolute;
    top: 15vh;
    padding: inherit;
    background-color: ${props => props.theme.primario};
    left: -9vh;
`

const Eyes1 = styled.img`
    position: absolute;
    filter: blur(0.5vh);
    mix-blend-mode: color-dodge;
    height: 3.5vh;
    width: 130vh;
    top: 41vh;
    left: -19.5vh;
    z-index: 14;
`

const Circle1 = styled.img`
    position: absolute;
    mix-blend-mode: overlay;
    height: 12vh;
    z-index: 16;
    left: 42vh;
    top: 45vh;
    filter: blur(6px);
`

const Circle2 = styled.img`
    mix-blend-mode: overlay;
    position: absolute;
    background-color: white;
    height: 15vh;
    width: 34vh;
    top: 68vh;
    left: 32vh;
    border-radius: 50%;
    filter: blur(10px);
    z-index: 16;
`

const Circle3 = styled.img`
    mix-blend-mode: overlay;
    position: absolute;
    background-color: white;
    height: 10vh;
    width: 22vh;
    z-index: 20;
    top: 70vh;
    left: 38vh;
    border-radius: 50%;
    filter: blur(11px);
`

const Circle4 = styled.img`
        mix-blend-mode: overlay;
    position: absolute;
    background-color: white;
    height: 22vh;
    width: 33vh;
    z-index: 20;
    top: 75vh;
    left: 70vh;
    border-radius: 50%;
    filter: blur(12px);
`


const Circle5 = styled.img`
    mix-blend-mode: overlay;
    position: absolute;
    background-color: white;
    height: 16vh;
    width: 20vh;
    z-index: 40;
    top: 70vh;
    left: 70vh;
    border-radius: 50%;
    filter: blur(15px);
`

const Circle6 = styled.img`
    mix-blend-mode: overlay;
    position: absolute;
    background-color: #c7d6e4;
    height: 28vh;
    width: 26vh;
    z-index: 20;
    top: 30vh;
    left: 23vh;
    border-radius: 50%;
    filter: blur(10px);
`

const Circle7 = styled.div`
    mix-blend-mode: overlay;
    position: absolute;
    background-color: #c7d6e4;
    height: 28vh;
    width: 26vh;
    z-index: 20;
    top: 30vh;
    left: 50vh;
    border-radius: 50%;
    filter: blur(13px);
`

const Circle7WhiteRight = styled(Circle7)`
    background-color: #ffffff;
    height: 18vh;
    width: 16vh;
    top: 35vh;
    left: 52vh;
`

const Circle7WhiteLeft = styled(Circle7WhiteRight)`
    left: 30vh;
`

const Circle8 = styled.img`
    position: absolute;
    background-color: #bac9d8;
    height: 60vh;
    width: 60vh;
    left: -8vh;
    top: -18vh;
    border-radius: 60%;
    filter: blur(40px);
`

const Circle9 = styled.div`
    position: absolute;
    background-color: #bac9d8;
    height: 21vh;
    width: 50vh;
    transform: rotate(-40deg) !important;
    border-radius: 60%;
    top: -5vh;
    left: -10vh;
    z-index: 30;
    mix-blend-mode: hard-light;
    filter: blur(24px);
`

const Circle10 = styled.div`
    position: absolute;
    background-color: #bac9d8;
    height: 30vh;
    width: 25vh;
    transform: rotate(50deg) !important;
    border-radius: 60%;
    left: -2vh;
    top: -10vh;
    z-index: 30;
    mix-blend-mode: hard-light;
    filter: blur(25px);
`

const AvatarContainer = styled.div`
    position: relative;
    left: 33vh;
`

export const AvatarAlfa = () => {

    const parallax = (e) => {
        document.querySelectorAll(".objectsParallax").forEach(object => {
            var valueAtributte = object.getAttribute("data-value")
            var x = e.clientX * valueAtributte / 250
            var y = e.clientY * valueAtributte / 250

            object.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }

    document.addEventListener("mousemove", parallax)

    return (
        <AvatarContainer>
            <Circle10
                className="objectsParallax"
                data-value="5"
            />
            <Circle10
                className="objectsParallax"
                data-value="5"
            />
            <Circle9
                className="objectsParallax"
                data-value="5"
            />

            <Circle8
                src={Vector3}
                className="objectsParallax"
                data-value="5"
            />

            <Circle7WhiteLeft
                className="objectsParallax "
                data-value="5"
            />

            <Circle7WhiteRight
                className="objectsParallax "
                data-value="5"
            />

            <Circle8
                src={Vector3}
                className="objectsParallax"
                data-value="5"
            />

            <Circle7
                className="objectsParallax"
                data-value="5"
            />

            <Circle6
                src={Vector3}
                className="objectsParallax"
                data-value="5"
            />

            <Circle5
                src={Vector3}
                className="objectsParallax"
                data-value="5"
            />

            <Circle4
                src={Vector3}
                className="objectsParallax"
                data-value="5"
            />
            <Circle3
                src={Vector3}
                className="objectsParallax"
                data-value="5"
            />
            <Circle2
                src={Vector3}
                className="objectsParallax"
                data-value="5"
            />

            <Circle1
                src={Vector3}
                className="objectsParallax"
                data-value="-2"
            />

            <WordsRey>
                REY
                <WordsAmante>
                    AMANTE
                </WordsAmante>
            </WordsRey>

            <Eyes1
                src={Vector2}
                className="objectsParallax"
                data-value="1"
            />

            <GradientAvatar />

            <Avatar
                src={AvatarImg}
            />
        </AvatarContainer>
    )
}
