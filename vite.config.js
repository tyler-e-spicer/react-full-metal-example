import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Enable TypeScript support
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    // Enable TypeScript
    loader: "tsx",
  },
});
