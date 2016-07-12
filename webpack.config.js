var path = require('path');
    module.exports = {
        entry: './vdom_es6.js',
        output: {
            path: __dirname,
            filename: 'vdom_compiled.js'
        },
        module: {
            loaders: [
                { test: path.join(__dirname, './'),
                  loader: 'babel-loader',
							     query: {
							        presets: ['es2015']
							      }
                }
            ]
        }
    };