import babel from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "es",
    sourcemap: false
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }),
    typescript({
      declaration: true,
      declarationDir: "./dist",
      rootDir: "./src"
    })
  ]
}
