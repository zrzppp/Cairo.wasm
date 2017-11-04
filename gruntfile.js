module.exports = grunt => {
    grunt.initConfig({
        concat: {
            options: {
                sourceMap: true
            },
            "js": {
                src: ["dev/js/*.js"],
                dest: "dist/app.concat.js"
            },
        },

        uglify: {
            my_target: {
                options: {
                    sourceMap: false,
                    mangle: false,
                },
                files: {
                    "dist/app.min.js" : ["dist/app.concat.js"],
                    "dist/appWASM.js" : ["dist/appWASM.js"]
                }
            }
        },

        watch: {
            cpp: {
                files: ["dev/cpp/*.cpp", "dev/cpp/*.h"],
                tasks: ["uglify"]
            },
            js: {
                files: ["dev/js/*.js"],
                tasks: ["concat", "uglify"]
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask("default", ["watch"])
}