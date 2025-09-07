import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ItemCountProvider } from "./context/ItemCountContext";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ItemCountProvider>
    <App />
  </ItemCountProvider>,
  // </StrictMode>,
);
