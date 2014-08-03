module.exports = function(grunt){

  grunt.config.init({

    dir : {
      src : "src"
    },

    ect : {
      options : {
        root : "<%= dir.src %>/template"
      },
      pc : {
        files : {
          "index.html" : ["main/index.ect"]
        }
      }
    },

    imagemin : {
      pc : {
        options : {
          optimizationLevel : 3
        },
        files : [{
          expand : true,
          cwd    : "img/",
          src    : ["**/*.{png,jpg,gif}"],
          dest   : "img/"
        }]
      },
    },

    sass : {
      pc : {
        options : {
          sourcemap : true
        },
        files : [{
          expand : true,
          cwd    : "<%= dir.src %>/sass",
          src    : ["*.scss"],
          dest   : "css",
          ext    : ".css"
        }]
      }
    },

    /*compass : {
      pc : { 
        options : {
          sassDir                 : "src/sass",
          cssDir                  : "css",
          imageDir                : "img",
          httpGeneratedImagesPath : "/img",
          outputStyle             : "expanded",
          noLineComments          : true
        }
      }
    },*/

    autoprefixer : {
      pc : {
        options : {
          map      : true,
          browsers : ["last 3 versions", "ie 8"]          
        },
        src : "css/trunk-*.css"
      }
    },

    sprite : {
      pc : {
        src         : "<%= dir.src %>/img/sprites/*.png",
        destImg     : "img/sprite.png",
        imgPath     : "../img/sprite.png",
        destCSS     : "<%= dir.src %>/sass/setup/_sprites.scss",
        algorithm   : "binary-tree",
        padding     : 2,
        cssTemplate : "src/img/sprites/spritesmith.mustache"
      }
    },

    uglify : {
      pc : {
        files : {
          "js/script.min.js" : [
            "src/js/vendor/*.js",
            "src/js/vendor/mock/*.js",
            "src/js/modules/dependents/*.js",
            "src/js/modules/*.js",
            "src/js/module_manager.js",
            "src/js/pages/*.js",
            "src/js/application.js",
            "src/js/init.js"
          ]
        }
      }
    },

    clean : {
      pc : ["docs/styledocco"]
    },

    watch : {
      pc_template : {
        files : ["<%= dir.src %>/template/**/*.ect"],
        tasks : ["ect:pc"]
      },

      pc_js : {
        files : ["<%= dir.src %>/js/*.js", "<%= dir.src %>/js/**/*.js"],
        tasks : ["uglify:pc"]
      },

      pc_css : {
        files : ["<%= dir.src %>/sass/*.scss", "<%= dir.src %>/sass/**/*.scss"],
        tasks : ["sass:pc", "autoprefixer:pc"]
      },

      pc_sprite : {
        files : ["<%= dir.src %>/img/sprites/*.png"],
        tasks : ["sprite:pc"]
      }
    }
  });

  // mozjpegが存在したら、imageminにmozjpeg使用のオプションを追加
  if(grunt.file.exists("node_modules/imagemin-mozjpeg")){
    var mozjpeg = require("imagemin-mozjpeg");  

    grunt.config.set(["imagemin", "pc", "options", "use"], [mozjpeg()]);
  }

  grunt.loadNpmTasks("grunt-styleguide");
  grunt.loadNpmTasks("grunt-bower-task");
  grunt.loadNpmTasks("grunt-ect");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-spritesmith");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-imagemin");

  grunt.registerTask("build", ["sprite:pc", "sass:pc", "autoprefixer:pc", "uglify:pc"]);

};