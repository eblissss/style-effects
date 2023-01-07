import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Menu from "./menu";
import Home from "./pages/home";
import ErrorPage from "./pages/error";

import SlidingImage from "./pages/slidingImage/slidingImage";
import RevealImages from "./pages/revealImages/revealImages";

const router = createBrowserRouter([
  {
    element: <Menu />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sliding-image",
        element: <SlidingImage />,
      },
      {
        path: "/reveal-images",
        element: <RevealImages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
