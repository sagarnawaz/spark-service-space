import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/shared/styles/index.css";
import "@/shared/i18n";

createRoot(document.getElementById("root")!).render(<App />);
