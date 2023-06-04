import styled from "styled-components";
import { devices } from "./valores";

export const ContainerSectionLeft = styled.div`
  display: flex !important;
  flex-direction: column;
  gap: 12px;

  @media ${devices.laptop} {
    flex-direction: row;
    gap: 0;
  }
`;
