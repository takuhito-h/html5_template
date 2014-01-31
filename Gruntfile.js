module.exports = function(grunt){
  grunt.initConfig({
    compass : {
      sp : { 
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
      sp : {
        files : {
          "js/script.min.js" : [
            "js_src/vendor/*.js",
            "js_src/application.js",
          ]
        }
      }
    },

    watch : {
      sp_js : {
        files : ["js_src/*.js", 'js_src/*/*.js'],
        tasks : ["uglify"]
      },

      sp_css : {
        files : ["sass/*.scss", 'sass/*/*.scss'],
        tasks : ["compass"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["compass", "uglify"]);
  grunt.registerTask("sp", ["compass:sp", "uglify:sp"]);

}