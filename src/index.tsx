import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PortfolioContentProvider } from "./content/PortfolioContentContext";
import "./style.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PortfolioContentProvider>
      <App />
    </PortfolioContentProvider>
  </React.StrictMode>
);

reportWebVitals();