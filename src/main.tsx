import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import "./forsage.css";
import ContextProviders from "./Contexts/ContextProviders.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProviders>
      <Suspense fallback={<h1 className="text-white">Loading............</h1>}>
        <App />
      </Suspense>
    </ContextProviders>
  </React.StrictMode>,
);
