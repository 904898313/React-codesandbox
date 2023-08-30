import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置内网访问
  server: {
    host: '0.0.0.0'
  },
});
