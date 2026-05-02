import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) return "vendor-react";
            if (id.includes("react-router-dom")) return "vendor-router";
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("lucide-react")) return "vendor-icons";
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    historyApiFallback: true,
    warmup: {
      clientFiles: [
        "./src/pages/HomePage.jsx",
        "./src/components/sections/home/HomeHeroSection.jsx",
      ],
    },
  },
  preview: {
    historyApiFallback: true,
  },
});
