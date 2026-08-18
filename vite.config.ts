import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const repoName = "mui-cianjur-profile-website";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/${repoName}/` : "/",
  plugins: [
    tailwindcss(),
    tanstackStart({ customRouter: true }),
    react(),
    tsconfigPaths(),
  ],
}));
