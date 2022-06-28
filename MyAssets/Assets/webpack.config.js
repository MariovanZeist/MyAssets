const TerserJsPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = (env, args) => ({
    resolve: { extensions: ['.scss', '.ts', '.js'] },
    devtool: args.mode === 'development' ? 'source-map' : false,

    entry: {
        'BwaBlazor': './script/BwaUtil.ts',
        'components.bwa': './css/components.bwa.scss'
    },
    module: {
        rules: [
            { test: /\.ts?$/, exclude: /node_modules/ , loader: 'ts-loader' },
            { test: /\.(s(a|c)ss)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ],
    },
    optimization: {
        sideEffects: true,
        concatenateModules: true,
        providedExports: true,
        usedExports: true,
        innerGraph: true,
        minimize: true,
        minimizer: [new TerserJsPlugin({
            terserOptions: {
                ecma: 2019,
                compress: {
                    passes: 3
                },
                mangle: {
                },
                module: false,
                format: {
                    ecma: 2019
                },
                keep_classnames: false,
                keep_fnames: false,
                toplevel: true
            }
        })]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new RemovePlugin({
            after: {
                include: ['./wwwroot/components.bwa.js', './wwwroot/components.bwa.js.map']
            }
        })
    ],
})
