import { Navigate, Outlet } from "react-router-dom";
import { MasculinidadPage } from "../pages/MasculinidadPage";
import { ContentPage } from "../pages/ContentPage";
import { Navbar } from "../components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

export const routesMasculinidad = [
  {
    path: "/",
    element: <MasculinidadPage />,
  },
  {
    path: "buscar",
    element: <ContentPage />,
  },
  {
    path: "buscar/:busquedad",
    element: <ContentPage />,
  },
  {
    path: "buscar/:busquedad/:id",
    element: <ContentPage />,
  },
  {
    path: ":section/:id",
    element: <ContentPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

const theme = {
  telegram: "#229ED9",
  youtube: "#FF0000",
  libros: "#bac9d8",
  twitter: "#00acee",
  tiktok:
    "linear-gradient(97deg, rgba(1,1,1,1) 0%, rgba(105,201,208,1) 51%, rgba(238,29,82,1) 100%)",
  discord: "#5865F2",

  primario: "#04080b",
  secundario: "#bac9d8",

  fontRegular: "Satoshi Regular, sans-serif",
  styleRegular: "normal",
  weightRegular: "normal",

  fontMediumItalic: "Satoshi Medium Italic, sans-serif",
  styleMediumItalic: "italic",
  weightMediumItalic: 500,

  fontBoldItalic: "Satoshi Bold Italic, sans-serif",
  styleBoldItalic: "italic",
  weightBoldItalic: "bold",

  fontBlackItalic: "Satoshi Black Italic, sans-serif",
  styleBlackItalic: "italic",
  weightBlackItalic: 900,
};

const Input = styled.input`
  position: fixed;
  z-index: 900;
  transform: rotate(90deg);
  top: 50vh;
  left: -11vh;

  -webkit-appearance: none;
  appearance: none;
  background: ${(props) => props.theme.secundario};
  cursor: pointer;
  border-radius: 0.5vh;
  height: 1.6vh;
  width: 30vh;

  ::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    border: ${(props) => props.theme.secundario} 1vh solid;
    background-color: ${(props) => props.theme.primario};
    height: 4vh;
    border-radius: 2vh;
    width: 4vh;
  }
`;

export const MasculidadRoutes = () => {
  // const [scrollbarValue, setScrollbarValue] = useState(0);

  // console.log("xd")

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     setScrollbarValue(Math.floor(scrollTop));
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScrollbarMouseUp = (event) => {
  //   const scrollPosition = Number(event.target.value);

  //   window.scrollTo({
  //     top: scrollPosition,
  //     behavior: "instant",
  //   });

  //   setScrollbarValue(scrollPosition);
  // };

  return (
    <ThemeProvider theme={theme}>
      {/* <Input
        type="range"
        min="0"
        max="1500"
        value={scrollbarValue}
        onInput={handleScrollbarMouseUp}
      /> */}
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
};
