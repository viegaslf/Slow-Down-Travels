import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Consultor } from "./pages/Consultor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre-mim",
    element: <Sobre />,
  },
  {
    path: "/torna-te-consultor",
    element: <Consultor />,
  },
]);
