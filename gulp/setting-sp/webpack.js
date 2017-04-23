import path from "./_path.json";

export default {
    "entry" : "./" + path.src + "/js/application.js",
    "output" : {
        "filename" : "./" + path.build_root + "/js/script.min.js"
    },
    "module" : {
        "loaders" : [
            {
                "test": /\.json$/,
                "loader" : "json"
            },
            {
                "test" : /\.jsx$/,
                "loader" : "jsx-loader"
            },
            {
                "test" : /\.js(x?)$/,
                "exclude" : /node_modules/,
                "loader" : "babel-loader"
            }
        ]
    },
    "resolve" : {
        "extensions" : ["", ".js", ".jsx"],
        "modulesDirectories" : ["node_modules"]
    }
};