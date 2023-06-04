import styled from "styled-components";
import { devices } from "../masculinidad/../styles/valores";

export const ContainerArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;

  @media ${devices.mobileL} {
    flex-direction: row;
  }

  @media ${devices.mobileL} {
    height: 200px;
  }

  @media ${devices.tablet} {
    height: 100px;
    justify-content: left;
  }

`;

export const ImgArticle = styled.div`
  width: 100%;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }

  @media ${devices.mobileL} {
    width: 40%;
    height: 100%;
  }

  @media ${devices.tablet} {
    width: 20%;
  }
`;

export const MainArticle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.mobileL} {
    width: 60%;
  }

  @media ${devices.tablet} {
    width: 100%;
    height: 100%;
    justify-content: left;
  }
`;

export const TitleArtitle = styled.h3`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  color: ${(props) => props.theme.secundario};
  font-weight: ${(props) => props.theme.weightMediumItalic};
  font-family: ${(props) => props.theme.fontMediumItalic};
  font-style: ${(props) => props.theme.styleMediumItalic};
  
  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
  }
`;

export const FeaturedArticle = styled.span`
  color: ${(props) => props.theme.primario};
  background-color: #ffd057;
  border-radius: 5px;
  padding: 3px;
  font-size: 15px;
`;

export const DescriptionArticle = styled.div`
width: 100%;
  font-size: 14px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  color: ${(props) => props.theme.secundario};

  @media ${devices.tablet} {
    flex-direction: row;
  justify-content: space-between;
  }
`;

export const Descripcion = styled.div`

  @media ${devices.tablet} {
    max-width: 70%;
  }
`;

export const SocialRedesArticle = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;

  @media ${devices.tablet} {
    align-self: flex-end;
  }
`;
