import path from "./_path.json";

export default {
    "nunjucks" : path.src + "/template/**/*.njk",
    "iconfont" : path.src + "/img/font/*.svg",
    "css"      : path.src + "/sass/**/**/*.scss",
    "js"       : [path.src + "/js/**/*.js", path.ignore_src + "/js/jst.js"],
    "jst"      : path.src + "/js/template/*.html.tmpl"
};
