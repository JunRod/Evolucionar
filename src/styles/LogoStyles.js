import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "./valores";

export const LogoNavbar = styled(Link)`
  text-decoration: none;
  position: relative;
  height: 100%;
  width: 20vh;
`;

export const Title = styled.div`
  cursor: pointer;
  font-family: ${(props) => props.theme.fontBoldItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: ${(props) => props.theme.styleBoldItalic};
  font-size: 40px;
  letter-spacing: 0.2vh;
  color: ${(props) => props.theme.secundario};

  @media ${devices.mobileS} {
    font-size: 2vh;
  }
  @media ${devices.tablet} {
    font-size: 16px;
  }

  @media ${devices.laptopL} {
    font-size: 20px;
  }
`;