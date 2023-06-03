import styled from "styled-components";
import Vector2 from "/images//VectorEyes2.svg";
import Vector3 from "/images/Circle2.svg";
import { devices } from "../global/valores";
// import {} from "../../../public/images/Avatar.png"

const Avatar = styled.img`
  z-index: 10;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-mask-image: linear-gradient(
    to top left,
    transparent 12%,
    rgb(78, 78, 78) 35%,
    black 90%
  );
  -webkit-mask-size: 100% 100%;
`;

const GradientAvatar = styled.div`
  position: absolute;
  mix-blend-mode: overlay;
  z-index: 12;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    145deg,
    #c2d4e5,
    #394655 80%,
    transparent 95%
  );
  -webkit-mask: url("/images/Avatar.png");
  -webkit-mask-size: 100% 100%;
`;

const WordsRey = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.secundario};
  font-family: ${({ theme }) => theme.fontMediumItalic};
  font-weight: ${({ theme }) => theme.weightMediumItalic};
  font-style: ${({ theme }) => theme.styleMediumItalic};
  padding: 3px 3px 3px 200px;
  z-index: 16;
  letter-spacing: 10px;
  display: flex;
  flex-direction: column-reverse;
  text-align: end;

  @media ${devices.mobileS} {
    font-size: 10px;
    letter-spacing: 5px;
    right: 290px;
    top: 200px;
  }

  @media ${devices.mobileM} {
    right: 320px;
  }

  @media ${devices.mobileL} {
    right: 340px;
  }

  @media ${devices.mobileXL} {
    right: 330px;
  }

  @media ${devices.tablet} {
    font-size: 16px;
    letter-spacing: 10px;
    right: 75%;
    top: 58%;
  }

  &::before {
    order: 1;
    right: 45px;
    position: relative;
    content: "REY";
    padding: inherit;
    z-index: 12;
    background-color: ${(props) => props.theme.primario};
    right: 0px;
    }

  &::after {
    position: relative;
    content: "GUERRERO";
    padding: inherit;
    background-color: ${(props) => props.theme.primario};
    right: -64px;
  }
`;

const WordsAmante = styled(WordsRey)`
  right: -35px;
  top: 60px;

  &::before {
    content: "MAGO";
  }

  &::after {
    content: "AMANTE";
  }

  @media ${devices.tablet} {
    top: 83px;
  }

`;

const Eyes1 = styled.img`
  position: absolute;
  filter: blur(3px);
  mix-blend-mode: color-dodge;
  height: 10%;
  width: 25%;
  top: 37%;
  left: 24.5%;
  z-index: 14;
`;

const Circle2 = styled.img`
  mix-blend-mode: overlay;
  position: absolute;
  background-color: #ffffff;
  height: 10%;
  width: 20%;
  bottom: 22%;
  right: 50%;
  border-radius: 50%;
  filter: blur(10px);
  z-index: 16;
`;

const Circle3 = styled.img`
  mix-blend-mode: overlay;
  position: absolute;
  background-color: white;
  z-index: 20;
  height: 7%;
  width: 15%;
  bottom: 24%;
  right: 53%;
  border-radius: 50%;
  filter: blur(11px);
`;

const Circle4 = styled.img`
  mix-blend-mode: overlay;
  position: absolute;
  background-color: white;
  height: 20%;
  width: 25%;
  z-index: 20;
  bottom: 4%;
  right: 15%;
  border-radius: 50%;
  filter: blur(14px);
`;

const Circle5 = styled.img`
  mix-blend-mode: overlay;
  position: absolute;
  background-color: #ffffff;
  z-index: 40;
  height: 15%;
  width: 20%;
  z-index: 20;
  bottom: 12%;
  right: 22%;
  border-radius: 50%;
  filter: blur(19px);
`;

const Circle6 = styled.img`
  mix-blend-mode: overlay;
  position: absolute;
  background-color: #d4e6f7;
  height: 28%;
  width: 26%;
  z-index: 20;
  top: 30%;
  left: 15%;
  border-radius: 50%;
  filter: blur(10px);
`;

const Circle7 = styled.div`
  mix-blend-mode: overlay;
  position: absolute;
  background-color: #d4e6f7;
  height: 28%;
  width: 26%;
  z-index: 20;
  top: 30%;
  left: 42%;
  border-radius: 50%;
  filter: blur(14px);
`;

const Circle7WhiteRight = styled(Circle7)`
  background-color: #ffffff;
  height: 18%;
  width: 16%;
  top: 34%;
  left: 38%;

`;

const Circle7WhiteLeft = styled(Circle7WhiteRight)`
  left: 23%;
`;

const Circle8 = styled.img`
  position: absolute;
  background-color: #bac9d8;
  height: 60%;
  width: 60%;
  left: -8%;
  top: -18%;
  border-radius: 60%;
  filter: blur(40px);

  @media ${devices.mobileS} {
    display: none;
  }

  @media ${devices.mobileL} {
    display: flex;
  }

  @media ${devices.laptop} {
    display: flex;
  }

  @media ${devices.laptopL} {
    display: flex;
  }
`;

const Circle9 = styled.div`
  position: absolute;
  background-color: #bac9d8;
  height: 21%;
  width: 50%;
  transform: rotate(-40deg) !important;
  border-radius: 60%;
  top: -5%;
  left: -10%;
  z-index: 30;
  mix-blend-mode: hard-light;
  filter: blur(24px);
`;

const Circle10 = styled.div`
  position: absolute;
  background-color: #bac9d8;
  height: 30%;
  width: 25%;
  transform: rotate(50deg) !important;
  border-radius: 60%;
  left: -2%;
  top: -10%;
  z-index: 30;
  mix-blend-mode: hard-light;
  filter: blur(30px);

  @media ${devices.mobileS} {
    display: none;
  }

  @media ${devices.mobileL} {
    display: flex;
  }

`;

const AvatarContainer = styled.div`
  position: relative;
  height: 100%;

  @media ${devices.mobileS} {
    position: absolute;
    height: 58%;
    width: 420px;
    right: 20px;
    bottom: 0px;
  }

  @media ${devices.mobileL} {
    right: 120px;
  }

  @media ${devices.mobileXL} {
    right: 200px;
  }

  @media ${devices.tablet} {
    position: relative;
    height: 101%;
    top: -8px;
    width: 750px;
    right: 140px;
  }

  @media ${devices.laptop} {
    right: 240px;
    position: relative;
    height: 101%;
    top: -8px;
    width: 800px;
  }
`;

export const AvatarAlfa = () => {
  const parallax = (e) => {
    document.querySelectorAll(".objectsParallax").forEach((object) => {
      var valueAtributte = object.getAttribute("data-value");
      var x = (e.clientX * valueAtributte) / 250;
      var y = (e.clientY * valueAtributte) / 250;

      object.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  document.addEventListener("mousemove", parallax);

  return (
    <AvatarContainer>
      <Circle10 className="objectsParallax" data-value="5" />
      <Circle10 className="objectsParallax" data-value="5" />

      <Circle9 className="objectsParallax" data-value="5" />
      <Circle8 src={Vector3} className="objectsParallax" data-value="5" />

      <Circle7WhiteLeft className="objectsParallax " data-value="5" />

      <Circle7WhiteRight className="objectsParallax " data-value="5" />

      <Circle8 src={Vector3} className="objectsParallax" data-value="5" />

      <Circle7 className="objectsParallax" data-value="5" />

      <Circle6 src={Vector3} className="objectsParallax" data-value="5" />

      <Circle5 src={Vector3} className="objectsParallax" data-value="5" />

      <Circle4 src={Vector3} className="objectsParallax" data-value="5" />

      <Circle3 src={Vector3} className="objectsParallax" data-value="5" />

      <Circle2 src={Vector3} className="objectsParallax" data-value="5" />

      <WordsRey>
        <WordsAmante />
      </WordsRey>

      <Eyes1 style={{
        filter: "blur(20px)"
      }} src={Vector2} className="objectsParallax" data-value="1" />
      <Eyes1 src={Vector2} className="objectsParallax" data-value="1" />

      <GradientAvatar />

      <Avatar src={"/images/Avatar.png"} />
    </AvatarContainer>
  );
};
