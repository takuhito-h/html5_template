import path from "./_path.json";

export default {
    "mode" : "development",
    "entry" : [
        "./" + path.src + "/js/application.ts"
    ],
    "output" : {
        "filename" : "script.min.js"
    },
    "module" : {
        "rules" : [
            {
                "test" : /\.(?:ts|tsx)$/,
                "exclude" : /node_modules/,
                "use" : {
                    "loader" : "ts-loader",
                    "options" : {
                        "transpileOnly" : true
                    }
                },
            }
        ]
    },
    "resolve" : {
        "extensions" : [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
        "modules" : [
            "node_modules",
            "common/js"
        ]
    }
};
