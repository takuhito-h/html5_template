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

    styleguide : {
      pc : {
        name : "Style Guide",
        options : {
          framework : {
            name : "kss",
            options: {
              includeType: 'scss',
              includePath: 'sass/**/*.scss'
            }
          }
        },
        files : {
          'docs/kss': 'css/style.css'
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

    bower : {
      install : {
        options : {
          targetDir: "js_src/vendor",
          layout: "byType",
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false
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
  grunt.loadNpmTasks("grunt-bower-task");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["compass", "uglify", "styleguide"]);
  grunt.registerTask("pc", ["compass:pc", "uglify:pc"]);

};