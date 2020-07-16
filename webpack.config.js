// input-> entry point -> output 
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
    return  {
        entry: './src/app.js',
        output: {
            // __dirname is absolute path
          path: path.join(__dirname, 'public'),
          filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                // tests to run for any file that ends in .js
                test: /\.js$/,
                exclude: /node_modules/
        },     {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
            }]
        }, 
        plugins: [
            CSSExtract
            ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};




