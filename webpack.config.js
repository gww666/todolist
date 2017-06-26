module.exports = {
    entry : "./src/index.js",
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader : "babel-loader",
                query : {
                    presets : ["es2015"]
                }
            }
        ]
    },
    output : {
        path : __dirname,
        filename : "./src/bundle.js"
    }
}