import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import myPlugin from './plugins/myPlugin'
import resolveNode from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
      dir: "dist"
    },
    {
      file: "dist/bundile.min.js",
      format: "iife",
      name: "version",
      dir: "dist",
      plugins: [terser()]
    }
  ],
  plugins: [resolveNode(), babel(), json(), myPlugin()]
}