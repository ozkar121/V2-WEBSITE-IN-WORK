// App.tsx is kept as a thin re-export so any old references still resolve.
// The real router + providers live in src/routes.tsx (consumed by main.tsx
// through ViteReactSSG). New code should import from "./routes" instead.
import { routes } from "./routes";

export { routes };
export default routes;
