import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { DashboardLayout } from "src/Layout/DashboardLayout";
import NotFoundPage from "src/Components/NotFoundPage";
import { AuthLayout } from "src/Layout/AuthLayout";

const Home = lazy(() => import("src/Pages/Home"));
const Login = lazy(() => import("src/Pages/Login"));
const Register = lazy(() => import("src/Pages/Register"));

const Dashboard = lazy(() => import("src/Pages/Dashboard"));

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
const Ideas = lazy(() => import("src/Pages/Ideas"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        errorElement: <NotFoundPage />,
      },

      {
        path: "x3",
        element: <X3 />,
      },

      {
        path: "x4",
        element: <X4 />,
      },

      {
        path: "xxx",
        element: <XXX />,
      },

      {
        path: "xGold",
        element: <XGold />,
      },

      {
        path: "xQore",
        element: <XQore />,
      },

      {
        path: "maxQore",
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

      {
        path: "ideas",
        element: <Ideas />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
