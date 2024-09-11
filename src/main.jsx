import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Component/App";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
