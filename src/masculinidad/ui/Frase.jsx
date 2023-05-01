import { useEffect } from "react";
import { useState } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import styled, { css } from "styled-components";

const phrases = [
  "\Recursos sobre masculinidad seleccionados cuidadosamente y recopilados en una sola web\ <div>Incluye recursos traducidos de otros idiomas al español</div>",
  "\'El secreto no es correr detrás de las mariposas, es cuidar el jardín para que ellas vengan hacia ti'\ <div>Mário Quintana</div>",
];

const Phrase = styled.div`
    ${props => css`
        color: ${props.theme.secundario};
        font-family: ${props.theme.fontMediumItalic};
        font-weight: ${props.theme.weightMediumItalic};
        font-style: ${props.theme.styleMediumItalic};
    `}
    height: 23vh;
    text-transform: uppercase;
    margin-bottom: 5vh;
    letter-spacing: .4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: scroll;
    text-align: center;
    font-size: 2.5vh;
    position: relative;
    order: 1;
    max-height: 30vh;
    width: 60vh;
    z-index: 20;

    div {
      margin-top: 2vh;
      position: relative;
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
    <Scrollbar>
      <Phrase
        dangerouslySetInnerHTML={{ __html: phrases[currentItemIndex] }}
      />
    </Scrollbar>
  );
}

