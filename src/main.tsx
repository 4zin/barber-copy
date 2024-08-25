import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StylistsProvider } from "./context/stylistContext.tsx";
import { BlogProvider } from "./context/blogContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StylistsProvider>
    <BlogProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogProvider>
  </StylistsProvider>
);
