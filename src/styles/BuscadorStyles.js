import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "./valores";

export const ContainerSearch = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;

  @media ${devices.mobileS || devices.mobileM || devices.mobileL} {
    display: none !important;
  }

  @media ${devices.laptop} {
    display: ${(props) => props.displaySearch ? "flex" : "none"} !important;
  }
`;

export const ButtonReturn = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  z-index: 90;
  padding: 3px 4px;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  color: ${(props) => props.theme.secundario};
  font-size: 17px;
  border: 0.5vh solid ${(props) => props.theme.secundario};
  border-radius: 1vh;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.primario};
    background-color: ${(props) => props.theme.secundario};
  }
`;

export const ContainerInput = styled.div`
  z-index: 300;
  border-radius: 1vh;
  gap: 1vh;
  width: 80vh;
  border: 0.5vh solid ${(props) => props.theme.secundario};
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  order: 2;
  border: 0;
  border-radius: 0;
  padding: 0;
  width: 100%;
  font-family: ${(props) => props.theme.fontRegular};
  font-weight: ${(props) => props.theme.weightRegular};
  font-style: ${(props) => props.theme.styleRegular};
  color: ${(props) => props.theme.secundario};
  background-color: transparent;
  font-size: 2.8vh;

  &:focus {
    border: 0;
    outline: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.secundario};
    font-size: 2.8vh;
  }
`;

export const Icon = styled.svg`
  cursor: pointer;
  padding: 0.8vh 1.5vh;
  order: 0;
  height: 5vh;
  color: ${(props) => props.theme.secundario};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.secundario};
    color: ${(props) => props.theme.primario};
  }
`;