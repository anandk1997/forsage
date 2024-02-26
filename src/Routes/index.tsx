import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "src/Components/NotFoundPage";

import Home from "src/Pages/Home";
import Links from "src/Pages/Links";
import Partners from "src/Pages/Partners";

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
]);
