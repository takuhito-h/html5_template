module.exports = function(grunt){
  grunt.initConfig({
    compass : {
      pc : { 
        options : {
          specify: "sass/style.scss",
          sassDir   : "sass",
          cssDir    : "css",
          imageDir  : "img",
          httpGeneratedImagesPath  : "/img",
          outputStyle : "expanded",
          noLineComments: true
        }
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

    styleguide : {
      pc : {
        name : "Style Guide",
        options : {
          framework : {
            name : "styledocco",
            options : {
              preprocessor : 'sass'
            }
          }
        },
        files : {
          'docs/styledocco': 'sass/**/*.scss'
        }
      }
    },

    clean : {
      pc : ['docs/styledocco']
    },

    watch : {
      pc_js : {
        files : ["js_src/*.js", 'js_src/*/*.js'],
        tasks : ["uglify"]
      },

      pc_css : {
        files : ["sass/*.scss", 'sass/*/*.scss'],
        tasks : ["compass"]
      },

      pc_styleguide : {
        files : ['sass/**/*.scss'],
        tasks : ['clean', 'styleguide']        
      }
    }
  });

  grunt.loadNpmTasks("grunt-styleguide");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["compass", "uglify"]);
  grunt.registerTask("pc", ["compass:pc", "uglify:pc"]);

}