import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// Also, don't forget to npm i -D @types/node so that __dirname won't throw an error.
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
