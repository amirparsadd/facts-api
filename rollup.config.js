import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs", // Output as CommonJS
    sourcemap: false,
  },
  plugins: [
    nodeResolve({
      browser: false,
      preferBuiltins: true, // Use built-in Node.js modules if needed
    }),
    commonjs({
      transformMixedEsModules: true, // Ensure mixed ESM/CJS works properly
    }),
    replace({
      preventAssignment: true,
      "process.env.API_SECRET": JSON.stringify(process.env.API_SECRET), // Inject the API_SECRET from .env file
    }),
  ],
  external: [], // Add dependencies here to exclude them from bundling
};
