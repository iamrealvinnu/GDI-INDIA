import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://nexus1-dev.gdinexus.com:8410",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
