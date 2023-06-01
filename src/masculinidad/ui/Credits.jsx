import { Link } from "react-router-dom";
import styled from "styled-components";
import Twitter from "/images/Twitter.svg";
import Linkedin from "/images/Linkedin.svg";
import Love from "/images/Love.svg";

const CreditsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: italic;
  margin-top: 28vh;
  padding: 2vh;
  gap: 2vh;
  color: ${(props) => props.theme.secundario};
  font-size: 2.5vh;
  letter-spacing: 1.2vh;
`;

const ContainerSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  height: 8vh;
  width: 13vh;
  gap: 1vh;
`;

const Img = styled.img`
  height: 30px; /* Aplica directamente el estilo height */
  width: 30px; /* Aplica directamente el estilo width */
`;

export const Credits = () => {
  return (
    <CreditsContainer id="seccion-destino">
      <ContainerSocialMedia>
        <Link to={"https://twitter.com/JuNRod_"} target="_blank">
          <Img src={Twitter} alt="Twitter" />
        </Link>
        <Link
          link={"linkedin"}
          to={"https://www.linkedin.com/in/junrod/"}
          target="_blank"
        >
          <Img src={Linkedin} alt="Twitter" />
        </Link>
      </ContainerSocialMedia>
      <p>© 2023 | Hecho por JuNRod con mucho <Img src={Love} /> </p>
    </CreditsContainer>
  );
};
