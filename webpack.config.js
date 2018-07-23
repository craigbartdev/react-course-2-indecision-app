//entry->output
//documentation at  webpack.js.org/configuration/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, 
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({ //add link to style in index.html
                    use: [
                        {
                            loader: 'css-loader', //for source maps for dev after prod added
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
                })
                /* 
                use: [ //no extracting css for production and no maps after prod source maps
                    'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
                */
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', 
        //cheap module source map fails for development after production source map is added
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/'
        }
    }
}