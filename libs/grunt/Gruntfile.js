//Skapar en modul
module.exports = function(grunt){
    // Projekt konfiguration.
    grunt.initConfig({
        pkg:grunt.file.readJSON('../../package.json'),
        //Inkludera cssmin
        options: { 
            shorthandCompacting: false,
                roundingPrecision: -1
            },
        cssmin: {
            target: {
                files: [{
                    '../../css/min.style.css': ['../../css/layouts/*.css', '../../css/layouts/pageOne/*.css', '../../css/layouts/pageTwo/*.css']
                }]
            }
        },
        //Inkludera uglify
        uglify: {
            my_target: {
                files: {
                    '../../js/output.min.js': ['../../js/controllers/*.js', '../../js/views/*.js']
                }
            }
        }
    });
    //ladda in cssmin och uglify
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify', 'cssmin']);
}