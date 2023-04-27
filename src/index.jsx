import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "./layout/LayoutPublic";

import Home from "./pages/home/HomeContainer";
import About from "./pages/about/AboutContainer";
import Service from "./pages/service/ServiceContainer";
import SaludMental from "./pages/service/SaludMentalContainer";
import SaludFisica from "./pages/service/SaludFisicaContainer";
import SaludNutricional from "./pages/service/SaludNutricionalContainer";
import NotFound from "./pages/notfound/NotFoundContainer";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound />,
        element: <LayoutPublic />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: "/quienes-somos",
                        element: <About />
                    },
                    {
                        path: "/servicios",
                        element: <Service />
                    },
                    {
                        path: "/servicios/salud-mental",
                        element: <SaludMental />
                    },
                    {
                        path: "/servicios/salud-fisica",
                        element: <SaludFisica />
                    },
                    {
                        path: "/servicios/salud-nutricional",
                        element: <SaludNutricional />
                    },
                ]
            }
        ]
    }
]);
