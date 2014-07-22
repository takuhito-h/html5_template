module.exports = function(grunt){

  grunt.initConfig({
    compass : {
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
    },

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
        imgPath: "img/sprite.png",
        destCSS: "src/sass/ui/_style-sprites_test.scss",
        algorithm: "binary-tree",
        padding: 2,
        cssTemplate: "src/img/sprites/spritesmith.mustache"
      }
    },

    uglify : {
      pc : {
        files : {
          "js/script.min.js" : [
            "js_src/vendor/*.js",
            "js_src/application.js",
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
        tasks : ["uglify"]
      },

      pc_css : {
        files : ["src/sass/*.scss", "src/sass/**/*.scss"],
        tasks : ["compass", "autoprefixer"]
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
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-spritesmith");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("build", ["sprite:pc", "compass:pc", "autoprefixer:pc", "uglify:pc"]);

};