import path from "./_path.json";

export default {
    "src"  : path.src + "/html/main/*.ect",
    "dest" : path.build_root,
    "prettify" : {
        "indent_size" : 4,
        "extra_liners" : ""
    }
};
