import path from "./_path.json";

export default {
    "src": {
        "template" : path.src + "/html/",
        "html" :  path.src + "/html/pages/**/*.njk"
    },
    "dest": {
        "root" : path.build_root
    }
};
