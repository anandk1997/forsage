import { RouterProvider } from "react-router-dom";

import { router } from "./Routes";

const App = () => (
  <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
);

export default App;
