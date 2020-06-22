import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'lib/index.js',
    output: {
        file: 'dist/caasy-min.js',
        format: 'umd',
        name: 'caasy'
    },
    plugins: [
        babel({
            extensions: ['.js'],
            exclude: ['node_modules/@babel/**', 'node_modules/core-js/**']
        }),
        terser()
    ]
};