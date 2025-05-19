import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Changed from "./" to "/"
  build: {
    outDir: "public",
    emptyOutDir: true,
    assetsDir: "assets",
    sourcemap: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
  },
});
