import styled from "styled-components";
import { devices } from "./valores";

export const ConteinerCarousel = styled.div`
  z-index: 5;
  position: absolute;

  button {
    display: none !important;
  }

  @media ${devices.mobileS} {
    right: 150px;
    top: 60px;
    width: 600px;
  }

  @media ${devices.mobileM} {
    width: 560px;
  }

  @media ${devices.mobileL} {
    width: 900px;
    top: -55px;
    right: 10px;
  }

  @media ${devices.tablet} {
    width: 900px;
    top: 60px;
    right: 140px;
  }
`;

export const Imagen = styled.img`
  padding-left: 2vh;
  cursor: pointer;
  clip-path: inset(8% 0% 3% 0%);
  height: 150px;

  @media ${devices.mobileS} {
    height: 100px;
  }

  @media ${devices.mobileL} {
    height: 150px;
  }
`;