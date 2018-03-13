import path from "./_path.json";

export default {
    "src"  : [path.src + "/img/font/*.svg"],
    "dest" : path.build_root + "/font/",
    "options" : {
        "fontName"       : "icon",
        "startUnicode" : 0xF001,
        "normalize" : true
    },
    "consolidate_options" : {
        "fontName"  : "icon",
        "fontPath"  : "../font/",
        "className" : "c-icon",
        "timeStamp" : Date.now()
    },
    "css" : {
        "src" : path.src + '/img/font/template.scss',
        "dest" : path.src + '/sass/object/component/',
        "rename_options" : {
            "basename"　: "_icon"
        }
    },
    "html" : {
        "src"  : path.src + '/img/font/template.html',
        "dest" : path.src + '/img/font/',
        "rename_options" : {
            "basename"　: "font-preview"
        }
    }
};