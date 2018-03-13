import path from "./_path.json";

export default {
    "entry" : "./" + path.src + "/js/application.js",
    "output" : {
        "filename" : "./" + path.build_root + "/js/script.min.js"
    },
    "module" : {
        "loaders" : [
            {
                "test" : /\.jsx$/,
                "use" : [
                    {
                        "loader" : "jsx-loader"
                    }
                ]
            },
            {
                "test" : /\.js(x?)$/,
                "exclude" : /node_modules/,
                "use" : [
                    {
                        "loader" : "babel-loader"
                    }
                ]
            }
        ]
    },
    "resolve" : {
        "extensions" : [".js", ".jsx"],
        "modules" : ["node_modules"]
    }
};