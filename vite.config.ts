import react from "@vitejs/plugin-react";
import RubyPlugin from "vite-plugin-ruby";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [RubyPlugin(), tailwindcss(), react()],
});
