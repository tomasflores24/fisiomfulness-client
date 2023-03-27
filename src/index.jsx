import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "./layout/LayoutPublic";

import Home from "./pages/home/HomeContainer";
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
                ]
            }
        ]
    }
]);
