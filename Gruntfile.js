module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: '30%',
                        suffix: '_small',
                        quality: 20
                    }, {
                        name: 'large',
                        width: 1000,
                        suffix: '_large',
                        quality: 40
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images_src',
                    dest: 'images/'
                }]
            }
        }
    });

    // Load the plugin that provides the "responsive-image" task.
    grunt.loadNpmTasks('grunt-responsive-images');

    // Default task(s).
    grunt.registerTask('default', ['responsive_images']);

};