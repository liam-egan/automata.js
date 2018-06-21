import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import minify from 'rollup-plugin-babel-minify'

export default {
  input: 'src/automata.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'automata',
    },
  ],
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    minify({
      comments: false,
    }),
  ],
}
