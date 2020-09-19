import commonjs from "rollup-plugin-commonjs";

export default [
  {
    input: "lib/cli-index.js",
    output: {
      file: "dist/cli-index.js",
      format: "cjs"
    },
    external: ["shelljs", "yargs"]
  },
  {
    input: "lib/cli.js",
    output: {
      file: "dist/cli.js",
      format: "cjs"
    },
    external: ["shelljs", "yargs"]
  },
  {
    input: "lib/index.js",
    output: {
      file: "dist/index.js",
      format: "cjs"
    },
    plugins: [
      commonjs()
    ]
  }
];