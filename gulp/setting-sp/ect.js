import path from "./_path.json";

export default {
    "src"  : path.src + "/template/main/*.ect",
    "dest" : path.build_root,
    "prettify" : {
        "indent_size" : 4,
        "extra_liners" : ""
    }
};