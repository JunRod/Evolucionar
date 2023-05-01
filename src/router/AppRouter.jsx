import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MasculidadRoutes, routesMasculinidad } from "../masculinidad/routes/MasculidadRoutes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasculidadRoutes />,
    children: routesMasculinidad
  },
])

export const AppRouter = () => {

  return <RouterProvider router={router} />
}
