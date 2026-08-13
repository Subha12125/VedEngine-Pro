import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Imports Tailwind CSS v4 and global styles
import App from "./App.jsx";

/**
 * React Application Entrypoint
 * Mounts the root <App /> component inside the DOM element with id="root".
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);