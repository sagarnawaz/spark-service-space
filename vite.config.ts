import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react-dom") || id.includes("react-router-dom") || id.includes("react-helmet-async")) {
            return "react-core";
          }
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("@react-three") || id.includes("/three/")) return "three";
          if (id.includes("i18next") || id.includes("react-i18next")) return "i18n";
          if (id.includes("@tanstack/react-query")) return "query";
          return "vendor";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
