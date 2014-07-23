module.exports = function(grunt){

  grunt.initConfig({

    sass : {
      pc : {
        files : [{
          expand: true,
          cwd: "src/sass",
          src: ["*.scss"],
          dest: "css",
          ext: ".css"
        }]
      }
    },

    /*compass : {
      pc : { 
        options : {
          sassDir   : "src/sass",
          cssDir    : "css",
          imageDir  : "img",
          httpGeneratedImagesPath  : "/img",
          outputStyle : "expanded",
          noLineComments: true
        }
      }
    },*/

    autoprefixer : {
      pc : {
        options : {
          browsers: ["last 3 versions", "ie 8"]          
        },
        src: "css/trunk-*.css"
      }
    },

    sprite: {
      pc : {
        src: "src/img/sprites/*.png",
        destImg: "img/sprite.png",
        imgPath: "../img/sprite.png",
        destCSS: "src/sass/setup/_sprites.scss",
        algorithm: "binary-tree",
        padding: 2,
        cssTemplate: "src/img/sprites/spritesmith.mustache"
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
      pc_js : {
        files : ["src/js/*.js", "src/js/**/*.js"],
        tasks : ["uglify:pc"]
      },

      pc_css : {
        files : ["src/sass/*.scss", "src/sass/**/*.scss"],
        tasks : ["sass:pc", "autoprefixer:pc"]
      },

      pc_sprite : {
        files: ["src/img/sprites/*.png"],
        tasks: ["sprite:pc"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-styleguide");
  grunt.loadNpmTasks("grunt-bower-task");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-spritesmith");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("build", ["sprite:pc", "sass:pc", "autoprefixer:pc", "uglify:pc"]);

};