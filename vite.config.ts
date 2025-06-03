import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig(({ command }) => {
  const base =
    command === "build" && process.env.VITE_BASE_URL
      ? process.env.VITE_BASE_URL
      : "/";

  return {
    plugins: [react()],
    base: base,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});