import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  resolve: {
    alias: {
      "@c": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@p": fileURLToPath(new URL("./src/pages", import.meta.url)),
    },
  },
});
