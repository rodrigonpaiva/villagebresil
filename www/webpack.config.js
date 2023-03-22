const path = require('path')

module.exports = {
    entry: path.resolve(__dirname,'./src/index.js'),
    module:{
        rules:[
            {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            }
        ]
    },
    resolve:{
        extensions: ['*', '.js']
    },
    output:{
        filename: 'script.js',
        path:path.resolve(__dirname, 'dist/assets/js')
    },
    mode: 'production',
    module:{
        rules:[
        
        {
            test:/\.(scss|css)$/, 
            use:['style-loader', 'css-loader', 'sass-loader']
        },
        
        
        {
            test:/\.(png|jpg|gif|svg)$/i, 
            type: 'asset/resource',
        }
        ]
    }
}