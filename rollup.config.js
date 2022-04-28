import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import cleanup from 'rollup-plugin-cleanup';
import autoExternal from 'rollup-plugin-auto-external';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      del({targets: 'lib/*'}),
      autoExternal(),
      typescript(),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        modules: {
          generateScopedName: `[name]__[local]___v${pkg.version
            .split()
            .join('-')}`,
        },
        minimize: true,
      }),
      commonjs(),
      terser(),
      cleanup({extensions: ['js', 'ts', 'jsx', 'tsx', 'tag']}),
    ],
  },
  // {
  //   input: 'lib/esm/types/index.d.ts',
  // },
];
