import path from "./_path.json";

export default {
    "src"  : [path.src + "/font/*.svg"],
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
        "src" : path.src + '/font/template.scss',
        "dest" : path.src + '/css/object/component/',
        "rename_options" : {
            "basename"　: "_icon"
        }
    },
    "html" : {
        "src"  : path.src + '/font/template.html',
        "dest" : path.src + '/font/',
        "rename_options" : {
            "basename"　: "font-preview"
        }
    }
};
