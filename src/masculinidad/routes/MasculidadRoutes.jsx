import { Navigate, Outlet } from "react-router-dom";
import { MasculinidadPage } from "../pages/MasculinidadPage";
import { ContentPage } from "../pages/ContentPage";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/valores";
import { ContainerNav } from "../../styles/MasculidadRoutesStyles";

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

export const MasculidadRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContainerNav>
        <Navbar />
      </ContainerNav>

      <Outlet />
    </ThemeProvider>
  );
};
