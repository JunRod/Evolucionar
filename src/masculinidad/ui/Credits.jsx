import styled from "styled-components";
import Twitter from "../../../public/img/Twitter.svg";
import Linkedin from "../../../public/img/Linkedin.svg";
import { Link } from "react-router-dom";

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

  img {
    height: 100%;
    width: 100%;
    filter: invert(100%);
  }
`;

export const Credits = () => {
  return (
    <CreditsContainer id="seccion-destino">
      <ContainerSocialMedia>
        <Link to={"https://twitter.com/JuNRod_"} target="_blank">
          <img src={Twitter} alt="Twitter" />
        </Link>
        <Link
          link={"linkedin"}
          to={"https://www.linkedin.com/in/junrod/"}
          target="_blank"
        >
          <img src={Linkedin} alt="Twitter" />
        </Link>
      </ContainerSocialMedia>
      © 2023 | JuNRod
    </CreditsContainer>
  );
};
