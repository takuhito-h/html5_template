import path from "./_path.json";

export default {
    "src" : path.src + "/css/**/*.scss",
    "dest" : path.build_root + "/css",
    "sass" : {
        "outputStyle" : "compressed"
    },
    "cssnext" : {
        "browsers" : ["last 3 versions"]
    }
};
