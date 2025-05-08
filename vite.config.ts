import fixReactVirtualized from "esbuild-plugin-react-virtualized";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config"; // `defineConfig` from the `vite` import does not support the "test" property

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    compression(), // or compression({ algorithm: 'brotliCompress' })
    visualizer({ open: false }),
  ],
  build: {
    sourcemap: false, // consider true if you need error tracking with tools like Sentry
    target: "es2017", // supports all major browsers except IE11 (useful for most cases)
    outDir: "build",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    rollupOptions: {
      output: { manualChunks: { react: ["react", "react-dom"] } },
    },
  },
  define: {
    "process.env": {}, // for compatibility with some npm packages
  },
  optimizeDeps: { esbuildOptions: { plugins: [fixReactVirtualized] } },
  resolve: { alias: { "~": "src" } },
  server: { open: true },
  // Note: configure this as necessary to match your testing setup and needs
  test: {
    environment: "jsdom", // mimics the browser environment for React
    globals: true, // allows using `describe`, `it`, `expect` without importing
    setupFiles: "./src/setupTests.ts", // optional setup (e.g. msw, custom matchers)
    include: ["src/**/*.{test,spec}.{ts,tsx}"], // match test files
    coverage: {
      reporter: ["text", "json", "html"], // common coverage formats
      include: ["src"], // include all source files
      exclude: ["**/*.d.ts", "**/test-utils/**", "src/setupTests.ts"],
    },
  },
});
