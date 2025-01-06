import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router.jsx";
import { PageProvider } from "./context/PageProvider.jsx";
import { DarkProvider } from "./context/DarkModeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkProvider>
      <PageProvider>
        <Router />
      </PageProvider>
    </DarkProvider>
  </StrictMode>
);
