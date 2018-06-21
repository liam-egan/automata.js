const rollup = require('rollup')
const pkg = require('../package.json')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const minify = require('rollup-plugin-babel-minify')
const cleanup = require('rollup-plugin-cleanup')

const defaultPlugins = [
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
]

const cjsBundle = {
  input: {
    input: 'src/automata.js',
    plugins: [
      ...defaultPlugins,
      cleanup({
        comments: 'none',
      }),
    ],
  },
  output: {
    file: pkg.main,
    format: 'cjs',
  },
}

const umdBundle = {
  input: {
    input: 'src/automata.js',
    plugins: [
      ...defaultPlugins,
      minify({
        comments: false,
      }),
    ],
  },
  output: {
    file: pkg.browser,
    format: 'umd',
    name: 'automata',
  },
}

const bundleOptions = [cjsBundle, umdBundle]

async function build() {
  for (let i = 0; i < bundleOptions.length; i++) {
    const bundle = await rollup.rollup(bundleOptions[i].input)
    await bundle.write(bundleOptions[i].output)
  }
}

build()
