import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'lib/index.js',
    output: {
        file: 'dist/caasy-min.js',
        format: 'umd',
        name: 'caasy'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            extensions: ['.js'],
            exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
            presets: [
                [
                    '@babel/preset-env',
                    {
                        useBuiltIns: 'usage',
                        debug: true,
                        corejs: 3
                    }
                ]
            ]
        }),
        terser()
    ]
};