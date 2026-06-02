import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// When the HTML was prerendered (react-snap), the #root already has markup;
// hydrate it instead of re-creating, so the static HTML the crawler sees and
// the React app remain in sync without a flash.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
