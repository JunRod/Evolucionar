import styled, { css } from "styled-components";
import { devices } from "./valores";

export const Title = styled.div`
  font-family: ${(props) => props.theme.fontBoldItalic};
  font-weight: ${(props) => props.theme.weightBoldItalic};
  font-style: ${(props) => props.theme.styleBoldItalic};
  font-size: 4vh;
  color: ${(props) => props.theme.secundario};
  letter-spacing: 2vh;
  text-transform: uppercase;

  @media ${devices.mobileS} {
    font-size: 22px;
    width: 250px;
    letter-spacing: 1.7vh;
  }

  @media ${devices.tablet} {
    font-size: 3.5vh;
    letter-spacing: 2vh;
    width: initial;
  }

  @media ${devices.laptop} {
    font-size: 4vh;
  }

  @media ${devices.laptopL} {
    font-size: 4vh;
  }
`;

export const InputLink = styled.input`
  &:focus {
    border: 0.5vh solid ${(props) => props.theme.secundario};
    outline: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.secundario};
  }
  border: 0;
  text-align: center;
  padding: 4vh 4vh;
  color: ${(props) => props.theme.secundario};
  margin-top: 8.7vh;
  transition: border 0.1s ease;
  border-bottom: 0.5vh solid ${(props) => props.theme.secundario};
  position: relative;
  top: 0.4vh;
  background-color: transparent;
  width: 100%;
  height: 5vh;
`;

export const InputButtonLeft = styled.div`
  display: flex;

  @media ${devices.mobileS} {
    width: 140px;
  }

  @media ${devices.tablet} {
    width: initial;
  }

  @media ${devices.laptop} {
    width: initial;
  }

  @media ${devices.laptopL} {
    width: initial;
  }
`;

export const Button = styled.div`
  ${(props) => {
    if (props.isActive)
      return css`
        background-color: ${(props) => props.theme.secundario};
        color: ${(props) => props.theme.primario} !important;
      `;
  }};

  color: ${(props) => props.theme.secundario};
  cursor: pointer;
  border: 0.6vh solid ${(props) => props.theme.secundario};
  position: relative;
  height: 6vh;
  width: 20vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:nth-child(2) {
    border-left: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.secundario};
    color: ${(props) => props.theme.primario};
  }
`;

export const ButtonSend = styled(Button)`
  border-left: 0.6vh solid ${(props) => props.theme.secundario} !important;
  font-size: 3vh;
  &:hover {
    color: ${(props) => props.theme.primario};
  }

  @media ${devices.mobileS} {
    width: 110px;
  }

  @media ${devices.tablet} {
    width: 190px;
  }

  @media ${devices.laptop} {
    width: 190px;
  }

  @media ${devices.laptopL} {
    width: 190px;
  }
`;

export const FlexInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  width: 80vh;

  @media ${devices.mobileS} {
    width: 40vh;
  }

  @media ${devices.tablet} {
    width: 70vh;
  }

  @media ${devices.laptop} {
    width: 80vh;
  }

  @media ${devices.laptopL} {
    width: 80vh;
  }
`;

export const DescripcionInput = styled.div`
  color: ${(props) => props.theme.secundario};
  font-size: 3vh;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
`;

export const Input = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.svg`
  height: 4vh;
`;
