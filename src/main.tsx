import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import ReactPixel from "react-facebook-pixel"; // Importando o pacote

// Configuração do Meta Pixel com o ID do seu Pixel
const pixelId = "1209097780164237"; // Substitua pelo seu ID de Pixel

const Main = () => {
  useEffect(() => {
    // Inicializa o Pixel quando o componente for montado
    ReactPixel.init(pixelId);
    ReactPixel.pageView(); // Rastreia a primeira visualização de página

    // Escutando mudanças de URL (para Single Page Apps)
    const handleRouteChange = () => {
      ReactPixel.pageView(); // Rastreia quando a URL mudar
    };

    // Escuta mudanças no Router
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Main />);
