import { Navigate, Outlet } from "react-router-dom";
import { MasculinidadPage } from "../pages/MasculinidadPage";
import { ContentPage } from "../pages/ContentPage";
import { Navbar } from "../components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../global/valores";

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

// const Input = styled.input`
//   position: fixed;
//   z-index: 900;
//   transform: rotate(90deg);
//   top: 50vh;
//   left: -11vh;

//   -webkit-appearance: none;
//   appearance: none;
//   background: ${(props) => props.theme.secundario};
//   cursor: pointer;
//   border-radius: 0.5vh;
//   height: 1.6vh;
//   width: 30vh;

//   ::-webkit-slider-thumb {
//     position: relative;
//     appearance: none;
//     border: ${(props) => props.theme.secundario} 1vh solid;
//     background-color: ${(props) => props.theme.primario};
//     height: 4vh;
//     border-radius: 2vh;
//     width: 4vh;
//   }
// `;

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
