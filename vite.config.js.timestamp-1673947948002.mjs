// vite.config.js
import { defineConfig } from "file:///F:/vip/Motiv/node_modules/vite/dist/node/index.js";
import react from "file:///F:/vip/Motiv/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "F:\\vip\\Motiv";
var vite_config_default = defineConfig({
  plugins: [react()],
  base: "/motiv_task/",
  build: {
    chunkSizeWarningLimit: 2800
  },
  resolve: {
    alias: [
      {
        find: "@",
        "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets")
      }
    ]
  }
});
export {
  vite_config_default as default
};
