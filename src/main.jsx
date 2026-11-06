import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import GlobalSyles from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalSyles />
    <App />
  </StrictMode>,
);
