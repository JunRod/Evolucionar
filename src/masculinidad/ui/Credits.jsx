import { Link } from "react-router-dom";
import styled from "styled-components";
import Twitter from "/images/twitter.svg";
import Linkedin from "/images/Linkedin.svg";
import Love from "/images/Love.svg";
import { devices } from "../../styles/valores";

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
  gap: 1vh;
`;

const Img = styled.img`
  height: 30px; /* Aplica directamente el estilo height */
  width: 30px; /* Aplica directamente el estilo width */
`;

const Letras = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
  
  @media ${devices.tablet} {
    display: flex;
  flex-direction: row;
  }
`

export const Credits = () => {
  return (
    <CreditsContainer id="seccion-destino">
      <ContainerSocialMedia>
        <Link to={"https://twitter.com/JuNRod_"} target="_blank">
          <Img src={Twitter} alt="Twitter" />
        </Link>
      </ContainerSocialMedia>
      <Letras>2023 | JuNRod</Letras>
    </CreditsContainer>
  );
};

