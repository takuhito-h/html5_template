import path from "./_path.json";

export default {
    "mode" : "development",
    "entry" : ["@babel/polyfill", "./" + path.src + "/js/application.js"],
    "output" : {
        "filename" : "script.min.js"
    },
    "module" : {
        "rules" : [
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
