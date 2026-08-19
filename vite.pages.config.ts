import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/mui-cianjur-profile-website/",
  plugins: [tailwindcss(), react(), tsconfigPaths()],
});
