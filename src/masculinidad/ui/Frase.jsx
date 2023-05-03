import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { devices } from "../global/valores";

const phrases = [
  "\Recursos sobre masculinidad seleccionados cuidadosamente y recopilados en una sola web\ <div>Incluye recursos traducidos de otros idiomas al español</div>",
  "\'El secreto no es correr detrás de las mariposas, es cuidar el jardín para que ellas vengan hacia ti'\ <div>Mário Quintana</div>",
];

const Phrase = styled.div`

  ::-webkit-scrollbar {
    display: none;
  }

        color: ${({theme}) => theme.secundario};
        font-family: ${({theme}) => theme.fontMediumItalic};
        font-weight: ${({theme}) => theme.weightMediumItalic};
        font-style: ${({theme}) => theme.styleMediumItalic};
  letter-spacing: 3px;
    height: 180px;
    width: 600px;
    position: relative;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: scroll;
    text-align: center;
    font-size: 17px;
    order: 1;
    z-index: 20;

    div {
      margin-top: 2vh;
      position: relative;
    }

    @media ${devices.mobileS} {
    font-size: 10px;
    width: 220px;
    left: 65px;
    top: -30px;

  }
  
  @media ${devices.tablet} {
    font-size: 14px;
    width: 380px;
    margin-top: 20px;
    left: 0;
  }

  @media ${devices.laptop} {
    width: 600px;
    font-size: 17px;
    margin-top: 25px;

  }

  @media ${devices.laptopL} {
    width: 600px;
    font-size: 17px;

  }
`

export const Frase = () => {

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  return (
    <Phrase
      dangerouslySetInnerHTML={{ __html: phrases[currentItemIndex] }}
    />
  );
}

