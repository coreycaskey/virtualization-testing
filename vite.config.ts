import react from "@vitejs/plugin-react";
import fixReactVirtualized from "esbuild-plugin-react-virtualized";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/virtualization-testing/",
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    compression(),
    visualizer({ open: false }),
  ],
  build: {
    sourcemap: true,
    target: "es2017",
    outDir: "build",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    // rollupOptions: {
    //   output: { manualChunks: { react: ["react", "react-dom/profiling"] } },
    // },
  },
  // define: {
  //   "process.env": {},
  // },
  optimizeDeps: { esbuildOptions: { plugins: [fixReactVirtualized] } },
  resolve: {
    alias: {
      "~": "src",
      "react-dom/client": "react-dom/profiling",
      // Optional (legacy interaction tracing APIs)
      "scheduler/tracing": "scheduler/tracing-profiling",
    },
  },
  server: { open: true },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src"],
      exclude: ["**/*.d.ts", "**/test-utils/**", "src/setupTests.ts"],
    },
  },
});
