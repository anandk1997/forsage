import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "src/Components/NotFoundPage";

const Home = lazy(() => import("src/Pages/Home"));

const X3 = lazy(() => import("src/Pages/Programs/X3"));
const X4 = lazy(() => import("src/Pages/Programs/X4"));
const XXX = lazy(() => import("src/Pages/Programs/XXX"));
const XGold = lazy(() => import("src/Pages/Programs/XGold"));
const XQore = lazy(() => import("src/Pages/Programs/XQore"));
const MaxQore = lazy(() => import("src/Pages/Programs/MaxQore"));

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
    path: "dashboard/x3",
    element: <X3 />,
  },

  {
    path: "dashboard/x4",
    element: <X4 />,
  },

  {
    path: "dashboard/xxx",
    element: <XXX />,
  },

  {
    path: "dashboard/xGold",
    element: <XGold />,
  },

  {
    path: "dashboard/xQore",
    element: <XQore />,
  },

  {
    path: "dashboard/maxQore",
    element: <MaxQore />,
  },

  {
    path: "partners",
    element: <Partners />,
  },

  {
    path: "links",
    element: <Links />,
  },

  {
    path: "instructions",
    element: <Instructions />,
  },

  {
    path: "smartTools",
    element: <SmartTools />,
  },
]);
