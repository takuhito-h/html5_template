import path from "./_path.json";

export default {
    nunjucks : path.src + "/html/**/*.njk",
    iconfont : path.src + "/font/*.svg",
    css : path.src + "/css/**/**/*.scss",
    js : [path.src + "/js/**/*.js"]
};
