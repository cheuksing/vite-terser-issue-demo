import path from "path";
import { defineConfig } from "vite";

const config = defineConfig({
  base: "./",
  build: {
    minify: 'terser',
    terserOptions: {
      mangle: {
        toplevel: true,
        module: true,
        properties: {
           regex: /^_/
         }
       },
       compress: {
        drop_console: true,
        drop_debugger: true,
       }
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs", "iife"],
      name: "terserBug"
    },
  },
});

module.exports = config
