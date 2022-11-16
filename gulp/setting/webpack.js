import path from "./_path.json";
import ESLintPlugin from "eslint-webpack-plugin";

export default {
    mode : "development",
    entry : [
        "./" + path.src + "/js/application.ts"
    ],
    output : {
        filename : "script.min.js"
    },
    module : {
        rules : [
            {
                test : /\.(?:ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly : true
                    }
                }
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
            extensions: [".js", ".ts"],
            exclude: "node_modules",
            failOnError: false,
            failOnWarning: false,
        })
    ],
    resolve : {
        extensions : [".js", ".ts"],
        modules : [
            "node_modules",
            "js/module"
        ]
    },
    devtool: "eval-source-map"
};
