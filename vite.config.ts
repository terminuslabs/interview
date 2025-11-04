import react from "@vitejs/plugin-react";
import RubyPlugin from "vite-plugin-ruby";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [RubyPlugin(), tailwindcss(), react()],
  server: {
    host: "0.0.0.0",
    port: 3036,
    allowedHosts: true, // to make Codesandbox happy
  },
});
