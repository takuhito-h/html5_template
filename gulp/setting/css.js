import path from "./_path.json";

export default {
    src : path.src + "/css/**/*.scss",
    dest : path.build_root + "/css",
    sass : {
        includePaths : ["src/pc/css"],
        outputStyle : "compressed"
    },
    cssnext : {
        browsers : ["last 3 versions"]
    }
};
