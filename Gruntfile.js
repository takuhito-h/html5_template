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
      }
    }
  });

  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-styleguide");
  grunt.loadNpmTasks("grunt-bower-task");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("build", ["compass:pc", "autoprefixer:pc", "uglify:pc"]);

};