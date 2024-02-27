import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "src/Components/NotFoundPage";

const Home = lazy(() => import("src/Pages/Home"));
const Instructions = lazy(() => import("src/Pages/Instructions"));
const Links = lazy(() => import("src/Pages/Links"));
const Partners = lazy(() => import("src/Pages/Partners"));
const SmartTools = lazy(() => import("src/Pages/SmartTools"));

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <Home />,
    // element: <h1>kjnmmnm</h1>,
    errorElement: <NotFoundPage />,

    // Component() {
    //   let data = useLoaderData();
    //   return <h1>{data.message}</h1>;
    // },
  },

  {
    path: "/partners",
    element: <Partners />,
  },

  {
    path: "/links",
    element: <Links />,
  },

  {
    path: "/instructions",
    element: <Instructions />,
  },

  {
    path: "/smartTools",
    element: <SmartTools />,
  },
]);
