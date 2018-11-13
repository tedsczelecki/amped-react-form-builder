const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const fs = require('fs');
const path = require('path');
const resolve = require('rollup-plugin-node-resolve');

const pkg = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf-8'));
const external = [
  ...Object.keys(pkg.dependencies || []),
];

export default [
  {
    input: 'src/entry.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    onwarn(warning) {
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
    },
    external,
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve({
        jsnext: true,
        preferBuiltins: false,
      }),
      commonjs(),
    ],
  }
];
