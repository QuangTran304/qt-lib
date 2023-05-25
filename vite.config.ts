import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import * as packageJson from "./package.json"; // Added "package.json" in tsconfig.node.json

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      // insertTypesEntry: true,
      include: ["src/components/"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // external: ["react", "react-dom", "styled-components"],
      external: [...Object.keys(packageJson.peerDependencies)],
      // output: {
      //   // exports: "named",
      //   globals: {
      //     react: "React",
      //     "react-dom": "ReactDOM",
      //     "@mui/material": "MUI",
      //   },
      // },
    },
  },
});
