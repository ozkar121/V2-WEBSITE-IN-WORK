import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// react-snap prerenders each route at build time, dumping the full React tree
// into #root. When the page boots, we hydrate that tree so crawlers + users see
// the real content with zero flash. Without prerender, #root only contains our
// LCP snapshot (id="lcp-snapshot"), so we render normally and React replaces it.
const isPrerendered =
  rootElement.hasChildNodes() && !rootElement.querySelector("#lcp-snapshot");

if (isPrerendered) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
