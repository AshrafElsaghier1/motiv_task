// vite.config.js
import { defineConfig } from "file:///F:/vip/Motiv/node_modules/vite/dist/node/index.js";
import react from "file:///F:/vip/Motiv/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "F:\\vip\\Motiv";
var vite_config_default = defineConfig({
  plugins: [react()],
  base: "/motiv_task",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFx2aXBcXFxcTW90aXZcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXHZpcFxcXFxNb3RpdlxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovdmlwL01vdGl2L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYmFzZTogXCIvbW90aXZfdGFza1wiLFxuICBidWlsZDoge1xuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjgwMCxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICdAJyxcbiAgICAgICAgXCJAYXNzZXRzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hc3NldHMnKSxcbiAgICAgIH1dXG4gIH1cblxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNE4sU0FBUyxvQkFBb0I7QUFDelAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsdUJBQXVCO0FBQUEsRUFDekI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDbkQ7QUFBQSxJQUFDO0FBQUEsRUFDTDtBQUVGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
